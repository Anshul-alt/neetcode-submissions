class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temp) {
        let result = new Array(temp.length).fill(0);
        let stack = [];
        for (let i = 0; i < temp.length; i++) {
            while (stack.length > 0 && temp[i] > temp[stack[stack.length - 1]]) {
                let prevIndex = stack.pop();
                result[prevIndex] = i - prevIndex;
            }
            stack.push(i);
        }
        return result;
    }
}
