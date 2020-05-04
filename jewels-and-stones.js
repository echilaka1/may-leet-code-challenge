var numJewelsInStones = function(J, S) {
    let jewMap = {};
    for(i = 0; i < J.length; i++) {
        jewMap[J[i]] = true;
    };

    let count = 0;
    for(i = 0; i < S.length; i++) {
        if(jewMap[S[i]]) count++;
    }
    return count;
};