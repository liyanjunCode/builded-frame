
// 身份证格式化 111111*******0000
const formatID = data => {
    if (!data || data.toString().length !== 18) return '';
    return data.toString().replace(/^(.{6})(?:\d+)(.{4})$/, '$1******$2');
};

export { formatID };
