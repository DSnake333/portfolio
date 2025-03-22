export const copyToClipboard = (text, callback) => {
  navigator.clipboard.writeText(text)
    .then(() => {
      if (callback) callback();
    })
    .catch(err => {
      console.error('Could not copy text: ', err);
    });
};