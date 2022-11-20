function computeClosestToZero(ts) {
    // Write your code here
    // To debug: console.error('Debug messages...');

    // if empty return 0
    // loop
    // target = 0
    let target = 0
    for(let i = 0; i < ts.length; i++){

        if(target === 0) {
            target = ts[i]
        }else if(ts[i] > 0 && ts[i] <= Math.abs(target)){
            target = ts[i]
        }else if(ts[i] < 0 && -ts[i] < Math.abs(target)){
            target = ts[i]
        }
    }
    
    return target;
}

/* Ignore and do not change the code below */
const n = parseInt(readline());
const ts = readline().split(' ').map(j => parseInt(j)).slice(0, n);
const oldWrite = process.stdout.write;
process.stdout.write = chunk => { console.error(chunk); return true }
const solution = computeClosestToZero(ts);
process.stdout.write = oldWrite;
console.log(solution);
/* Ignore and do not change the code above */
