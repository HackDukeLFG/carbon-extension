//pass in longitude, latitude, days, weight of package, and type that was outlined on spreadsheet
//returns the dollars owed

function getCost(longitude, latitude, daysToShip, packWeight, type){
        //varables 
        let shipCost = 0; //kilograms of CO2
        let prodCost = 0; //kilograms of CO2
        let totalCost = 0;


        //gets ship cost
        let distances = [];
        let longs = [33.58,32.67,33.57,32.90,31.32,31.28,33.97,34.65,32.38,30.68,30.63,32.30,34.75,32.34,31.87,33.23,51.88,67.10,61.17,61.22,57.83,61.58,55.03,53.50,71.30,70.13,60.78,66.92,64.00,60.82,63.38,56.00,60.38,58.33,60.33,67.50,62.88,65.83,55.20,60.50,55.80,70.20,59.05,62.73,53.88,64.77,59.62,58.20,64.82,62.85,57.45,65.93,66.57,58.25,68.48,63.77,62.15,58.42,59.23,61.98,63.83,59.63,58.10,59.75,58.37,56.97,60.57,55.35,58.68,57.75,66.87,61.63,70.92,65.00,61.43,62.97,60.37,59.43,63.90,64.55,62.07,53.58,64.50,62.97,70.50,61.60,63.03,56.82,69.82,56.25,65.25,56.95,66.82,70.25,60.20,62.17,55.33,60.18,53.20,66.27,57.07,56.88,59.75,61.97,62.03,57.15,61.90,62.30,65.17,69.37,63.88,61.13,61.13,70.62,66.03,60.78,61.75,56.48,59.52,32.17,33.68,31.45,33.47,35.13,31.60,33.55,33.42,35.95,35.27,33.53,36.93,34.23,33.43,34.65,32.82,33.62,34.27,34.27,32.12,33.30,35.02,33.10,32.65,32.85,35.97,33.52,33.22,36.00,35.33,36.27,34.48,35.83,35.22,34.92,34.83,34.17,36.18,33.45,36.13,37.78,41.48,40.98,35.43,39.13,33.93,35.28,34.27,37.60,39.28,33.62,34.20,33.30,32.62,33.13,37.38,39.78,35.68,33.97,37.98,41.78,34.87,34.90,32.82,34.08,33.67,41.33,36.00,36.68,36.77,33.87,34.58,33.92,37.65,32.83,32.57,34.10,38.90,34.73,36.33,37.70,33.82,33.78,33.93,37.63,33.88,39.10,38.57,38.67,37.28,32.87,37.63,37.42,35.05,41.73,36.58,41.32,34.23,38.22,34.77,32.70,34.10,37.73,34.05,34.20,33.83,35.05,37.47,35.67,37.83,34.12,39.58,34.95,35.67,36.12,40.15,40.50,33.95,38.52,38.70,36.67,37.52,33.42,33.02,32.82,32.73,32.57,32.57,32.82,37.75,37.62,37.37,37.33,35.23,33.38,34.03,33.25,34.75,33.67,34.43,34.90,34.02,38.52,40.03,41.78,37.90,35.33,40.63,33.63,33.80,38.27,39.32,33.70,34.28,39.13,34.22,35.20,35.20,36.32,39.52,40.17,37.45,39.22,39.90,39.72,38.82,37.30,40.50,39.75,37.15,39.65,39.57,38.68,39.57,40.45,40.58,39.12,40.43,38.55,38.55,38.05,38.12,39.25,39.18,38.50,38.50,38.28,39.53,38.53,40.48,37.25,40.00,41.17,41.37,41.33,41.73,41.22,41.27,41.27,41.30,41.93,39.13,39.67,38.95,38.85,29.73,29.12,28.08,28.47,30.22,30.78,29.62,29.18,30.65,30.48,27.60,26.13,26.58,26.07,26.65,29.68,25.48,30.43,30.33,30.50,30.23,24.55,24.57,28.03,27.85,30.84,30.40,28.10,25.82,25.92,25.65,26.13,28.62,28.43,28.55,30.20,28.23,30.35,30.47,27.97,27.92,28.78,27.40,30.38,27.97,28.52,30.07,27.65,26.68,30.72,31.53,31.53,33.95,33.65,33.65,33.88,33.78,33.37,31.15,32.52,33.92,34.53,32.33,31.88,32.02,33.01,32.70,30.97,32.63,34.35,32.13,30.78,31.25,21.53,21.53,22.05,24.45,19.72,21.35,20.90,21.75,21.75,19.75,22.38,20.80,21.98,20.97,21.15,20.42,20.00,43.57,42.53,44.52,47.77,45.82,43.00,45.92,43.52,46.38,42.17,42.30,44.88,43.05,47.47,42.92,45.18,45.17,42.65,43.50,42.48,38.88,41.77,38.57,40.48,41.16,37.07,37.78,38.51,40.03,41.90,41.87,41.78,41.98,40.20,41.93,39.83,41.92,40.93,42.08,41.07,40.52,37.75,41.37,39.48,41.45,38.32,40.67,39.93,42.20,38.63,38.55,39.85,41.74,39.53,38.99,39.38,39.13,41.72,38.05,41.00,41.62,40.65,39.73,40.23,41.70,39.45,40.42,40.78,41.88,41.53,42.40,43.40,42.55,40.62,43.15,41.10,42.40,43.17,42.55,37.67,37.75,39.55,37.77,37.00,38.33,39.37,39.05,37.93,39.37,38.85,39.38,38.07,38.82,37.05,39.15,37.62,37.30,38.85,38.87,38.80,39.07,38.95,37.65,36.97,36.67,37.90,37.60,38.05,37.08,38.23,38.18,37.75,37.07,37.48,31.38,32.50,30.53,29.55,29.78,31.22,31.33,28.47,31.05,29.18,28.22,28.13,29.57,29.73,30.20,30.12,29.70,28.78,32.52,29.70,30.03,29.98,29.83,30.03,28.30,32.52,32.47,30.35,44.32,44.80,44.45,43.88,46.87,45.45,45.78,46.13,46.95,43.65,46.68,44.07,44.88,38.82,39.18,39.18,39.33,39.08,39.70,38.55,38.28,39.47,38.33,42.47,42.58,42.37,41.78,41.67,42.57,41.67,42.72,41.40,41.25,41.68,42.18,41.65,42.26,42.15,42.17,42.20,42.27,45.07,42.22,42.30,42.13,46.25,43.07,47.47,42.42,42.23,45.73,42.97,42.88,47.17,43.83,44.37,45.82,46.53,42.27,42.23,42.77,44.27,46.88,45.12,43.17,45.57,42.67,43.53,46.47,46.35,42.62,45.92,44.73,44.45,42.23,43.68,45.87,47.50,46.40,46.82,46.83,47.90,43.65,46.30,47.22,47.38,48.57,45.13,44.22,44.45,44.83,45.07,44.88,46.90,46.60,44.55,43.92,44.93,45.55,48.07,47.58,48.93,43.65,33.65,33.45,33.48,33.50,30.40,31.47,32.32,30.42,31.67,31.18,32.55,32.33,31.62,34.39,34.27,38.82,37.23,37.75,38.60,37.17,39.32,39.12,40.10,37.33,35.66,36.77,38.85,40.25,37.23,40.28,38.75,38.65,38.13,37.22,36.88,38.73,45.80,45.78,45.67,45.95,48.60,45.25,46.67,48.22,47.13,47.48,46.43,48.55,46.60,47.33,48.30,47.05,45.70,47.50,46.43,46.92,44.57,47.72,47.60,44.65,44.68,48.10,42.58,42.05,40.32,41.43,41.78,42.83,41.45,40.87,40.07,40.97,40.60,40.33,40.53,40.73,40.85,40.22,42.05,41.98,41.37,41.13,42.47,41.12,41.30,41.62,41.87,41.10,42.87,39.83,39.50,40.62,37.62,40.83,39.28,39.50,39.42,38.55,36.53,36.57,36.08,40.10,36.62,36.23,42.58,39.50,38.07,41.33,40.90,37.58,44.58,43.20,42.80,42.90,43.57,43.63,42.93,44.27,42.78,43.08,44.00,39.45,40.28,40.87,40.03,40.02,39.37,40.80,40.70,40.85,40.28,35.05,34.38,32.33,36.45,34.10,36.02,32.25,36.75,35.52,35.17,32.68,32.85,32.30,35.65,35.88,34.98,32.90,36.74,33.30,35.62,32.63,34.07,36.42,33.23,35.18,32.63,42.75,40.75,42.22,42.93,42.97,42.17,40.73,44.05,43.35,43.23,40.78,42.48,42.15,44.93,41.70,40.77,40.65,40.77,41.50,43.10,44.68,42.87,44.65,41.63,43.12,43.12,44.38,42.85,43.12,43.15,44.00,40.85,41.07,35.43,35.27,35.22,34.90,36.13,35.25,36.27,35.00,35.13,36.08,35.75,35.90,34.82,35.32,35.03,35.92,35.08,34.70,35.17,35.87,35.85,35.33,35.24,34.27,36.13,46.77,48.12,48.10,46.78,46.90,47.95,47.97,46.92,46.10,48.42,48.27,47.75,48.18,39.21,40.92,39.05,39.10,41.52,41.57,41.42,40.00,40.08,39.90,41.02,40.82,39.82,41.60,41.63,39.83,41.27,39.95,34.67,34.30,36.75,35.35,36.38,34.65,36.30,35.00,34.57,34.88,35.23,35.40,35.53,34.68,36.73,36.16,35.42,36.20,36.33,46.15,45.25,44.83,42.08,43.60,43.38,45.68,44.50,44.12,45.53,42.15,45.28,42.18,45.50,42.37,44.63,43.42,44.02,45.68,45.60,44.27,43.23,44.92,42.62,45.62,45.55,40.65,40.30,40.75,40.27,41.80,41.18,42.08,41.38,40.22,40.37,40.32,40.13,40.28,40.20,40.43,40.08,39.88,41.47,40.35,40.50,40.38,39.73,40.85,41.33,41.25,40.20,41.17,41.60,41.73,41.36,34.50,32.48,32.90,33.95,34.18,34.85,34.90,33.92,33.68,33.82,33.97,34.92,45.45,44.30,43.80,43.75,43.77,44.15,44.38,45.93,43.77,45.53,44.05,44.05,44.38,44.05,45.16,43.58,44.92,42.92,36.48,35.03,36.62,35.95,36.02,35.60,35.82,35.05,35.35,35.15,36.12,36.00,32.42,27.73,35.23,30.30,30.20,32.39,32.30,25.90,31.79,32.78,28.37,34.43,30.58,27.77,27.70,28.45,30.07,36.02,32.73,32.97,32.90,32.85,32.68,29.37,32.43,31.80,29.62,32.82,31.15,29.27,31.07,33.07,31.83,26.23,29.35,29.97,29.65,30.50,29.38,29.98,31.08,27.50,27.53,29.37,32.38,33.65,31.23,30.37,26.18,31.95,32.78,28.72,33.63,34.17,30.58,29.53,33.60,28.08,31.37,29.53,29.33,30.17,33.72,28.03,32.22,31.15,32.37,28.85,31.62,33.98,31.78,38.03,37.50,37.70,39.33,40.20,41.05,39.00,38.37,41.12,41.78,38.72,38.77,41.18,39.62,40.22,40.50,37.08,40.78,40.17,40.45,41.22,44.47,44.20,45.55,43.53,44.42,42.88,38.13,37.50,36.57,38.72,37.13,37.95,37.08,37.33,37.13,36.93,36.90,36.82,38.50,37.50,37.32,38.27,36.95,37.85,48.80,47.48,48.50,48.88,47.32,47.92,47.62,47.08,46.57,46.97,47.15,47.20,48.25,46.97,48.42,46.27,48.12,48.22,46.75,47.95,47.50,47.45,47.53,47.25,47.63,47.67,47.28,47.27,46.48,46.10,47.40,48.35,46.57,37.78,37.30,38.37,39.28,38.88,38.37,37.87,39.40,39.65,39.35,40.18,37.46,44.25,44.87,44.48,42.62,43.87,43.20,43.13,44.13,42.95,43.12,44.78,44.22,44.00,45.63,45.48,43.93,44.92,42.57,42.92,41.15,44.52,42.75,41.33,44.35,43.60,42.82,41.32,44.35,41.80,43.05,41.60,44.77,43.97,44.55];
        let lats = [85.85,85.44,86.75,87.25,85.45,85.72,86.09,86.77,86.37,88.25,88.07,86.40,87.62,86.99,86.02,87.62,176.65,157.85,150.02,149.85,134.97,159.53,131.57,173.30,156.78,143.63,161.80,151.52,145.73,152.30,148.95,134.22,147.08,137.05,145.00,148.48,149.83,144.07,162.72,145.50,133.25,148.47,158.52,143.92,166.53,141.15,135.37,136.35,147.87,154.47,134.03,149.83,145.27,134.90,149.48,171.73,145.45,135.73,135.43,152.08,149.00,151.50,135.45,154.92,134.58,133.95,151.25,131.70,156.65,152.50,162.63,149.03,153.23,150.65,142.92,155.62,166.27,146.33,152.27,149.08,163.30,169.42,165.43,141.93,149.88,149.08,145.50,132.97,162.92,134.65,166.87,158.62,150.65,148.33,154.30,153.25,160.50,149.75,174.13,166.03,135.35,154.20,135.53,151.20,146.67,170.22,147.30,150.10,152.10,152.13,160.80,146.35,146.25,159.85,168.08,148.72,150.05,132.37,139.67,110.88,112.08,109.60,111.73,111.67,110.35,113.17,112.38,112.15,113.95,112.38,111.45,111.33,112.02,112.43,109.68,111.92,110.00,110.00,110.93,111.67,110.73,115.00,114.62,114.40,89.95,92.40,92.80,94.17,94.37,93.15,93.10,90.65,92.38,92.15,92.25,91.93,94.13,94.00,90.93,122.32,120.53,124.10,119.05,121.45,116.95,116.62,116.68,118.60,120.70,114.72,118.37,117.35,116.47,117.28,120.57,121.85,117.68,117.63,122.05,124.23,116.78,117.88,115.68,118.03,117.73,124.28,121.32,121.77,119.72,117.97,117.38,118.33,122.12,115.57,117.12,117.78,120.00,118.22,119.95,121.82,118.15,118.05,118.40,118.92,117.27,121.57,121.30,121.40,120.52,117.15,120.95,122.05,118.15,122.53,121.85,122.32,118.07,122.28,114.62,117.20,117.23,122.22,117.62,119.20,116.50,118.13,122.12,120.63,122.83,119.12,124.22,121.12,121.28,121.47,122.25,122.30,117.45,121.50,121.60,121.60,122.25,117.62,118.58,117.13,117.17,116.98,116.98,116.97,122.68,122.38,121.92,121.82,120.65,117.58,120.40,119.45,118.73,117.88,119.83,120.45,118.45,122.82,124.07,122.47,121.25,117.10,120.95,116.17,118.33,121.93,120.13,117.83,116.15,123.20,118.48,120.95,120.95,119.40,105.35,103.22,105.87,106.87,105.12,104.75,104.72,108.63,107.53,104.87,107.75,106.92,104.83,104.77,105.50,105.02,105.08,108.53,104.63,106.93,106.92,103.52,102.60,106.30,103.70,107.88,107.88,104.52,107.80,106.05,106.82,104.33,105.87,73.13,73.48,72.05,72.65,72.67,72.88,72.90,72.08,72.68,75.47,75.60,77.46,77.04,85.03,81.57,81.55,80.55,81.88,86.52,83.10,81.05,86.52,86.53,82.77,80.13,81.87,80.15,81.87,82.27,80.38,86.68,81.52,81.70,81.68,81.75,81.68,81.95,82.52,85.18,81.42,80.63,80.28,80.28,80.43,81.80,80.68,81.32,81.33,85.68,80.60,87.32,87.20,82.60,82.68,81.25,82.55,84.37,82.53,80.80,85.58,80.42,80.12,87.02,84.18,82.52,83.32,84.42,84.42,84.30,84.52,81.97,81.38,84.93,84.52,84.87,85.00,81.57,81.15,85.07,83.65,83.20,83.60,85.17,81.20,83.28,82.40,158.12,158.12,160.30,166.47,155.07,157.93,156.43,158.28,158.28,156.05,159.67,156.95,159.35,156.83,157.10,156.47,156.12,116.22,113.77,114.22,116.82,115.43,115.17,116.13,112.07,117.02,112.32,113.37,116.10,115.87,115.80,112.60,113.90,114.47,111.58,114.30,114.48,90.05,88.32,90.15,88.93,89.60,89.22,89.25,89.09,88.28,87.65,87.62,87.75,87.90,87.60,88.72,88.87,88.25,90.43,87.82,87.85,90.66,89.00,88.68,88.28,90.52,88.86,89.68,91.20,89.10,88.96,89.85,89.67,89.67,89.33,89.17,86.50,86.62,86.00,87.53,85.20,87.42,86.15,86.27,85.38,86.32,87.30,86.93,91.12,91.70,93.65,90.70,94.75,94.18,93.93,93.33,92.45,96.38,95.15,92.40,95.48,97.22,97.65,99.97,101.88,96.20,94.92,96.77,100.72,101.70,99.27,99.83,97.87,94.88,100.97,96.67,97.27,98.58,94.90,98.82,97.65,95.62,95.67,97.43,86.43,87.50,85.97,83.32,85.00,84.07,85.67,85.73,87.17,88.77,82.52,92.30,93.67,91.15,89.67,93.30,92.95,92.55,91.78,93.20,90.07,93.75,94.40,90.65,92.12,92.00,93.22,91.10,89.05,92.05,91.20,91.88,90.25,90.02,90.03,91.98,93.75,93.82,89.82,69.80,68.82,68.37,69.93,68.02,69.55,69.63,67.78,67.88,70.32,68.05,69.12,70.88,76.87,76.67,76.67,76.42,76.77,77.72,75.13,76.40,76.17,75.50,71.28,70.92,71.03,70.50,69.97,71.60,70.28,71.12,70.62,70.07,70.97,71.18,70.52,73.18,70.93,72.72,72.53,71.87,83.57,83.75,85.23,86.43,84.47,85.95,87.85,83.02,83.33,87.08,83.75,85.52,88.50,82.53,84.68,88.12,90.13,84.47,85.55,84.60,86.25,87.95,87.63,86.25,84.80,83.42,84.08,84.37,87.40,82.83,85.92,85.58,83.40,83.53,93.37,95.38,94.93,94.13,95.88,92.18,91.82,94.42,96.07,93.52,92.85,93.38,94.52,93.92,95.82,93.47,93.38,93.22,95.07,94.32,95.08,92.50,93.05,94.07,96.18,90.83,95.35,95.58,88.45,88.58,90.98,90.08,89.07,89.33,90.08,88.92,89.17,90.47,88.57,88.75,91.25,89.54,88.77,92.22,89.58,92.13,92.17,94.50,94.72,94.60,92.55,94.35,95.36,90.47,94.55,93.72,93.38,95.53,90.37,90.63,91.77,92.42,91.90,93.55,108.53,111.15,105.67,112.50,112.37,112.55,113.15,106.62,104.80,111.37,109.83,109.77,112.00,106.93,114.27,109.45,110.43,111.18,105.87,114.08,112.32,104.18,115.37,111.10,111.12,105.58,99.98,102.80,96.75,99.65,99.15,103.08,97.35,100.00,95.58,98.32,98.43,101.39,101.63,99.00,96.75,100.58,101.05,97.43,96.02,100.68,98.68,95.92,95.90,98.95,103.60,102.98,100.55,117.13,117.08,116.87,114.52,115.78,114.85,115.97,118.70,118.63,115.57,115.67,115.17,118.92,116.02,115.03,116.17,119.78,117.08,116.25,117.80,116.08,71.18,71.50,72.00,72.27,71.43,72.30,71.43,71.30,71.52,70.82,71.38,74.57,74.28,74.28,74.35,74.60,75.07,74.42,74.17,74.05,74.82,106.60,103.32,104.27,103.15,105.68,106.95,107.70,108.23,108.78,107.90,103.20,106.10,106.77,105.15,106.28,106.05,106.40,104.50,104.53,106.08,108.17,106.90,105.57,107.27,103.60,106.40,73.80,74.37,75.98,78.73,78.20,76.90,73.43,75.73,73.62,75.40,73.10,76.47,79.25,74.85,74.80,73.98,73.78,73.90,74.10,78.95,75.40,75.12,73.47,73.88,77.67,77.67,74.20,73.93,76.12,75.38,76.02,72.63,73.72,82.55,75.55,80.93,76.88,76.50,75.50,76.18,78.88,78.93,79.95,81.38,82.82,77.62,77.63,79.50,75.68,77.05,77.43,79.02,78.78,77.88,77.97,79.39,77.92,80.23,100.75,98.90,98.87,102.80,96.80,97.18,97.40,98.68,97.15,101.35,101.28,101.83,103.63,82.23,81.43,84.67,84.43,81.68,81.48,81.87,82.88,83.07,84.20,83.67,82.52,82.93,83.80,81.40,84.05,80.67,81.90,99.27,97.02,96.00,99.20,97.80,98.40,99.77,99.05,98.42,95.78,97.47,97.60,97.65,94.62,97.10,97.09,97.38,95.90,97.92,123.88,122.75,117.82,124.47,118.95,124.95,121.88,123.28,123.22,122.95,121.73,118.00,120.35,118.40,122.87,124.05,124.25,117.02,118.85,122.60,121.15,123.37,123.00,123.37,121.15,122.40,75.43,78.32,80.33,79.09,78.63,78.90,80.18,79.87,76.85,77.42,78.83,76.30,79.40,76.77,76.57,75.02,75.25,78.13,79.93,80.22,75.97,77.43,77.83,75.73,76.92,75.15,71.58,71.42,71.43,71.25,82.72,80.72,80.03,81.12,79.72,82.35,82.22,80.80,78.93,78.72,80.47,81.96,98.43,96.80,99.32,99.32,103.60,103.10,98.22,102.17,98.03,100.43,101.60,101.60,100.28,103.07,103.32,96.73,97.15,97.38,82.40,85.20,87.42,85.08,89.40,88.92,83.98,90.00,89.87,85.51,86.68,86.50,99.68,98.03,101.70,97.70,97.68,101.48,101.45,97.43,98.96,97.43,97.67,100.28,96.37,97.50,97.28,99.22,95.55,102.55,96.97,96.83,97.03,96.85,96.87,100.92,99.85,106.40,95.17,97.35,97.72,94.87,97.83,96.07,104.80,97.67,99.17,95.35,95.28,99.77,98.58,99.08,97.68,97.82,99.47,100.78,94.72,101.82,94.75,104.02,98.23,102.18,98.07,96.25,95.45,101.71,94.02,98.28,102.05,97.03,100.50,98.47,98.47,102.42,96.67,95.87,98.18,97.42,95.40,96.92,97.22,98.50,103.20,109.78,110.70,113.10,112.58,112.93,113.07,110.15,110.72,111.97,111.85,113.03,109.75,112.02,110.75,111.72,110.63,113.60,111.97,112.20,109.52,114.05,73.15,72.57,72.33,73.95,72.02,72.88,78.45,76.20,79.33,77.18,76.62,79.82,76.37,79.20,76.50,76.28,76.20,76.03,77.30,77.33,79.97,78.85,78.98,75.48,122.53,122.77,122.33,118.47,119.52,122.28,117.65,122.58,119.60,123.97,122.48,119.32,122.68,122.90,119.53,119.12,123.50,123.67,117.12,124.55,122.22,122.30,122.30,123.15,117.53,117.33,121.33,122.58,122.80,118.28,120.20,122.65,120.53,81.12,81.22,81.60,80.23,79.85,82.55,80.40,77.98,79.92,81.43,80.65,80.20,88.52,91.48,88.13,89.03,91.25,90.18,89.33,87.67,87.90,88.05,89.67,88.53,88.57,89.45,91.72,90.27,89.62,110.10,106.47,104.82,109.02,105.38,111.00,105.53,110.73,108.73,105.68,104.81,107.20,108.45,109.07,106.97,107.97,110.42];
        for(let i = 0; i < 1217; i++){
            distances.push(Math.sqrt(Math.pow(longs[i]- longitude,2)+Math.pow(lats[i]-latitude,2)));
        }
        distances.sort(function(a,b){return a - b});
        if(daysToShip > 6){
            shipCost = packWeight * 2.2 * 6000 * 12.18 /1000; //change
        }
        else if(daysToShip == 0){
            shipCost = packWeight * 2.2 * 40 * 12.18 /1000; //change
        }
        else{
            let min = (250/69.0 * (daysToShip -1)); //converts to lat
            let max = (250/69.0 * (daysToShip));
            let count = 0;
            let sum = 0;
            let index = 0;
            if(distances[index] < min){
                while(index < distances.length-2 && distances[index+2] < min){
                    index ++;
                }
            }else{
                while(index > 0 && distances[index-1] > min){
                    index --;
                }
            }
            while(index != (distances.length) && distances[index] < max){
                sum += distances[index];
                count++;
                index++;
            }
            shipCost = packWeight * 2.2 *(sum/count) *69 * 12.18 /1000;
        }


        //gets production costs
        let ratioOfIndex = 0;
        let products = ["Clothing, Shoes, Jewelry & Watches","Amazon Fresh","Books","Movies","Music & Games","Electronics","Computers","Smart Home","Home, Garden & Tools","Pet Supplies","Food & Grocery","Beauty & Health","Toys","Kids & Baby","Handmade","Sports","Outdoors","Automotive & Industrial","Industrial & Scientific"];
        let ratio = [0.057,0.0011,0.18,0.018,0.3056,0.133,0.3056,0.057,1.53,0.01,0.866,0.00277,0.003,0.057,0.057,0.057,0.000108];
        let index = 0;
        for(index; index < products.length; index++){
            if(type == products[index]){
                ratioOfIndex = ratio[index];
                index += products.length;
            }
        }
        prodCost = packWeight * ratioOfIndex * 1000;
        totalCost =  prodCost + shipCost;
        return totalCost/1200; //dollars owed
}
