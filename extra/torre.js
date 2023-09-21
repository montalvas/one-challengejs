function construirTorre(n) {
    if (n === 1) return '*';
    return '*'.repeat(n) + '\n' + construirTorre(n-1);
}

console.log(construirTorre(10));