const formatDate = date => {
    return `${(date).getMonth()}/${(date).getDate()}/${(date).getFullYear()}`;
};

module.exports = { formatDate }