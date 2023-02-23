var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { MyLabel } from "../../components/MyLabel";
export default {
    title: 'UI/labels/MyLabel',
    component: MyLabel,
    argTypes: {
        color: { control: 'select' },
        fontColor: { control: 'color' },
    },
};
var Template = function (args) { return _jsx(MyLabel, __assign({}, args)); };
export var Basic = Template.bind({});
Basic.args = {
    size: 'h2',
    allCaps: false // Capitalize
};
export var AllCaps = Template.bind({});
AllCaps.args = {
    size: 'normal',
    allCaps: true // Capitalize
};
export var Secondary = Template.bind({});
Secondary.args = {
    size: 'normal',
    color: 'secondary'
};
export var Tertiary = Template.bind({});
Tertiary.args = {
    size: 'normal',
    color: 'tertiary'
};
export var CustomFontColor = Template.bind({});
CustomFontColor.args = {
    size: 'h1',
    fontColor: '#904dee'
};
export var CustomBackgroundColor = Template.bind({});
CustomBackgroundColor.args = {
    size: 'h1',
    fontColor: '#fff',
    backgroundColor: '#000'
};
