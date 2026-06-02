class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let row = 0;
        let col = matrix[0].length-1;
        while(row<matrix.length && col>=0) {
            let current = matrix[row][col];
            if(current === target) {
                return true;
            }
            if(target > current) {
                row++
            }
            else{
                col--;
            }
        }
        return false;
    }
}
