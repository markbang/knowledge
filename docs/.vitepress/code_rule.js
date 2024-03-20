const fs = require('fs');
const path = require('path');

// 定义函数获取指定目录下文件夹和文件名称（去除后缀.md）及其相对路径
function getDirectoryContents(docs) {
    const currentDirectory = path.resolve(docs);
    const contents = fs.readdirSync(currentDirectory, { withFileTypes: true });
    const result = [];

    contents.forEach(item => {
        const itemPath = path.join(currentDirectory, item.name);
        const relativePath = path.relative('docs', itemPath);

        // 获取文件名，去除后缀.md
        const fileName = item.name.endsWith('.md') ? item.name.slice(0, -3) : item.name;

        if (item.isDirectory()) {
            result.push({
                text: fileName,
                link: path.join('/', relativePath, '/')
            });
        } else if (item.isFile() && item.name !== 'index.md') {
            result.push({
                text: fileName,
                link: path.join('/', relativePath)
            });
        }
    });

    return result;
}

// 导出函数以便其他文件可以调用
module.exports = getDirectoryContents;
