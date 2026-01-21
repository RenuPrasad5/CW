const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else if (file.endsWith('.jsx') || file.endsWith('.js') || file.endsWith('.css') || file.endsWith('.html')) {
            results.push(file);
        }
    });
    return results;
}

const files = walk('./src');
files.push('./index.html');

files.forEach(file => {
    const buffer = fs.readFileSync(file);
    // Check if it's UTF-16 (le or be) by checking for null bytes or BOM
    let isUtf16 = false;
    if (buffer.length >= 2) {
        if (buffer[0] === 0xff && buffer[1] === 0xfe) isUtf16 = true; // UTF-16 LE
        if (buffer[0] === 0xfe && buffer[1] === 0xff) isUtf16 = true; // UTF-16 BE
        if (buffer.includes(0)) isUtf16 = true; // Rough check for null bytes
    }

    if (isUtf16) {
        console.log(`Fixing encoding for: ${file}`);
        // Try to decode as UTF-16LE (common on Windows)
        const content = buffer.toString('utf16le').replace(/^\uFEFF/, '');
        fs.writeFileSync(file, content, 'utf8');
    } else {
        // Just ensure it's clean UTF-8 without BOM
        const content = buffer.toString('utf8').replace(/^\uFEFF/, '');
        fs.writeFileSync(file, content, 'utf8');
    }
});
