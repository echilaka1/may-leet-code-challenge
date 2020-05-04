var solution = function (isBadVersion) {
    return function (n) {
        let start = 0, end = n;
        if (n === 1) return 1;
        if (isBadVersion(1)) return 1;
        while (start <= end) {

            let mid = Math.floor((start + end) / 2);
            let mathFloor = Math.floor(mid);
            let currentMid = isBadVersion(mathFloor);
            if (!currentMid && isBadVersion(mathFloor + 1)) return mathFloor + 1;
            if (currentMid && !isBadVersion(mathFloor - 1)) return mathFloor;
            if (!currentMid) {
                start = mid + 1;
            }
            else {
                end = mid - 1;
            }
        }
    }
};