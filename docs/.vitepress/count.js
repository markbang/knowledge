const fs = require('fs');
const path = require('path');

// 定义目录路径
const docsDir = 'docs';

// 递归函数，用于获取目录下所有md文件的字数总和
function getTotalWordCount(dir) {
    let totalWordCount = 0;

    // 获取目录下所有文件和子目录
    const files = fs.readdirSync(dir);

    // 遍历每个文件或目录
    for (const file of files) {
        // 构建文件或目录的完整路径
        const filePath = path.join(dir, file);

        // 检查文件状态
        const stats = fs.statSync(filePath);

        // 如果是目录，则递归调用 getTotalWordCount 函数
        if (stats.isDirectory()) {
            totalWordCount += getTotalWordCount(filePath);
        } else {
            // 如果是 md 文件，则获取其字数并加到总数中
            if (path.extname(filePath).toLowerCase() === '.md') {
                const content = fs.readFileSync(filePath, 'utf8');
                // 使用简单的空白字符分割字符串来计算字数
                const words = content.split(/\s+/).filter(word => word.length > 0);
                totalWordCount += words.length;
            }
        }
    }

    return totalWordCount;
}

// 获取字数总和并输出
export const totalWords = getTotalWordCount(docsDir);
