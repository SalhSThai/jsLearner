let styles = [`Jazz`,`Blues`];
styles[styles.length] = `Rock-n-Roll`;
styles[1] = `classic`;
delete styles[0];
console.log(styles.length);