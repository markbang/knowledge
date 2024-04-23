import { set_sidebar } from "./sidebar"
import getDirectoryContents from "./code_rule"

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
export const sidebars = {
    '/software/': set_sidebar('docs/software'),
    '/environment/': set_sidebar('docs/environment'),
    '/yrzx/': set_sidebar('docs/yrzx'),
    '/code/': getDirectoryContents('docs/code'),
    '/code/前端/': getDirectoryContents('docs/code/前端'),
    '/code/后端/': getDirectoryContents('docs/code/后端'),
    '/code/算法/': set_sidebar('docs/code/算法'),
    '/code/客户端/': set_sidebar('docs/code/客户端'),
    '/code/前端/小程序开发/': set_sidebar('docs/code/前端/小程序开发'),
    '/code/前端/Vue/': set_sidebar('docs/code/前端/Vue'),
    '/code/前端/TailwindCSS/': set_sidebar('docs/code/前端/TailwindCSS'),
    '/code/后端/数据库/': set_sidebar('docs/code/后端/数据库'),
    '/code/后端/Python/': getDirectoryContents('docs/code/后端/Python'),
    '/code/后端/Python/爬虫/': set_sidebar('docs/code/后端/Python/爬虫'),
    '/code/后端/Python/FastAPI/': set_sidebar('docs/code/后端/Python/FastAPI'),
    '/code/后端/Python/Python常用库/': set_sidebar('docs/code/后端/Python/Python常用库'),
    '/code/后端/Python/Python所实现的一些奇怪算法/': set_sidebar('docs/code/后端/Python/Python所实现的一些奇怪算法'),
    '/code/后端/Go/': set_sidebar('docs/code/后端/Go'),
}