const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];
//8. Reduce Exercise
// Sum up the instances of each of these

const instancesofindividual = data.reduce((previousValue, CurrentValue) => {
    const currentCount = previousValue[CurrentValue] ?? 0
    return { ...previousValue, [CurrentValue]: currentCount + 1 }

}, 0)
console.log(instancesofindividual);
