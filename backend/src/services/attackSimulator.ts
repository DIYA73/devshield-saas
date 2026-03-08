import { io } from "../server";

const locations = [
  { name: "Iran", coords: [51.389, 35.689] },
  { name: "China", coords: [116.407, 39.904] },
  { name: "Russia", coords: [37.617, 55.755] },
  { name: "USA", coords: [-74.006, 40.712] },
  { name: "Israel", coords: [34.781, 32.085] }
];

const target = [13.405, 52.52]; // Berlin

export const startAttackSimulation = () => {
  setInterval(() => {
    const random = locations[Math.floor(Math.random() * locations.length)];

    const attack = {
      from: random.coords,
      to: target
    };

    io.emit("attack-detected", attack);

  }, 1500);
};