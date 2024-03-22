export type Size = "low" | "medium" | "high"

export function calculateStoryPoints(risk: Size, effort: Size, complexity: Size) {
    const sizes = [risk, effort, complexity]
    const lowCount = sizes.filter((size) => size === "low").length
    const mediumCount = sizes.filter((size) => size === "medium").length
    const highCount = sizes.filter((size) => size === "high").length

    if (lowCount == 3) {
        return 1
    }
    if (highCount == 3) {
        return 100
    }

    if (lowCount == 2 && mediumCount == 1) {
        return 2
    }
    if (lowCount == 1 && mediumCount == 2) {
        return 3
    }
    if (mediumCount == 1 && highCount == 2) {
        return 40;
    }

    if (mediumCount == 3 || (lowCount == 2 && highCount == 1)) {
        return 5
    }
    if (lowCount == 1 && mediumCount == 1 && highCount == 1) {
        return 8
    }
    if ((lowCount == 1 && highCount == 2) || (mediumCount == 2 && highCount == 1)) {
        return 13
    }
}
