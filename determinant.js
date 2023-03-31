// Calculates the determinant of a given matrix
// Return value is the resulting matrix or false if the matrix is incompatible
function determinant(matrix) {
    let numRows = matrix.length
    let numColumns = matrix[0].length

    // Check that matrix has a determinnt
    if (numRows != numColumns) {
        return false
    }

    // Row reduce the matrix to triangular form
    reducedMatrix = rowReduction(matrix)

    // Multiply across the diagonal to get the determinant
    let i;
    let determinant = 1;
    for (i = 0; i < numRows; i++) {
        determinant = determinant * reducedMatrix[i][i]
    }

    return determinant;
}