var canConstruct = function(ransomNote, magazine) {
    const magazineChars = {};
    for (let i = 0; i < magazine.length; i++) {
        if (!magazineChars[magazine.charAt(i)]) magazineChars[magazine.charAt(i)] = 1;
        else magazineChars[magazine.charAt(i)]++
    }
    for (let j = 0; j < ransomNote.length; j++) {
        if (!magazineChars[ransomNote.charAt(j)]) return false
        magazineChars[ransomNote.charAt(j)]--
    }
    return true
};