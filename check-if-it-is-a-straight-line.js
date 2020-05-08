var checkStraightLine = function(coordinates) {
    const [x1, y1] = coordinates[0];
    const [x2, y2] = coordinates[1];
    const slope = (y2 - y1) / (x2 - x1);
    
    const line = (x) =>  slope * (x - x1) + y1;
    
    for(let i = 2; i < coordinates.length; i++) {
        const [x, y] = coordinates[i];
        if(y !== line(x)) return false;
    }
    return true;
};