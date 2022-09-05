export function displayTimestep(timestep:number) {
  if (Math.floor(timestep / 100) % 10 === 0) {
    console.log(timestep);
  }
}
