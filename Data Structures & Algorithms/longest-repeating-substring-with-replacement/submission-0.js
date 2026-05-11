class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        
let left = 0;
let maxLen = 0;
let maxFreq = 0;
let count = {};

for(let right = 0; right<s.length; right++) {
    count[s[right]] = (count[s[right]] || 0) + 1;
    maxFreq = Math.max(maxFreq, count[s[right]]);

    if((right-left+1) - maxFreq > k) {
        count[s[left]]--;
        left++
    }
    maxLen = Math.max(right-left+1, maxLen)
}
return maxLen;
    }
}
