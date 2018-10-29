import _ from 'lodash';
import './style.css';
import Icon from './icon.jpg';
import jsonData from './mydata.json'
import xmlData from './data.xml'

function component() {
    var element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // 将图像添加到我们现有的 div。
    var myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);

    // 读取json文件数据并显示，类似于NodeJS，webpack 内置支持JSON，也就是说 import Data from './data.json' 将正常运行。
    var elementP = document.createElement('p');
    elementP.innerHTML = jsonData.head;
    element.appendChild(elementP);

    // xml数据
    console.log('xmlData', xmlData);

    return element;
}

document.body.appendChild(component());
