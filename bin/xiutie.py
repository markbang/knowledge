import asyncio
import aiohttp
from lxml import etree
from collections import OrderedDict

async def fetch_page(session, url):
    async with session.get(url) as response:
        return await response.text()
async def main():
    urls = [f"https://cn.czmanga.com/comic/chapter/yirenzhixiafanwaixiutie-dongmantang/0_{i}.html" for i in range(80)]
    
    headers = {
        'User-Agent': 'Apifox/1.0.0 (https://apifox.com)',
        'Accept': '*/*',
        'Host': 'cn.czmanga.com',
        'Connection': 'keep-alive'
    }
    urls_list = []
    async with aiohttp.ClientSession(headers=headers) as session:
        tasks = [fetch_page(session, url) for url in urls]
        pages = await asyncio.gather(*tasks)
        for page in pages:
            etree_html = etree.HTML(page)
            img_url = etree_html.xpath('//img/@src')
            img_li = list(img_url)
            chapter_name = etree_html.xpath('//*[@id="layout"]/div/div[1]/div/div')
            chapter_li = [i.xpath('string(.)') for i in chapter_name]
            urls_list = urls_list + chapter_li + img_li
        with open("docs/yrzx/漫画/锈铁篇.md", "w", encoding='utf-8') as f:
            for url in list(OrderedDict.fromkeys(urls_list).keys()):
                if not url.startswith("https"):
                    f.write(":::" + "\n")
                    f.write(f"## {url}" + "\n")
                    f.write("::: details 点击展开" + "\n")
                else:
                    f.write(f"![]({url})" + "\n")
            f.write(":::" + "\n")
        with open("docs/yrzx/漫画/锈铁篇.md", "r", encoding='utf-8') as f:
            lines = f.readlines()
        if lines:
            del lines[0]
            with open("docs/yrzx/漫画/锈铁篇.md", "w", encoding='utf-8') as f:
                f.writelines(lines)
            

asyncio.run(main())