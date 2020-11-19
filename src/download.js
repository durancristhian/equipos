import domtoimage from 'dom-to-image';
const downloadBtns = document.getElementsByClassName('js-download');

Array.from(downloadBtns).forEach(downloadBtn => downloadBtn.addEventListener('click', onClick));

function onClick(event) {
  event.preventDefault();

  const printable = document.getElementById(event.target.dataset.fieldId);

  domtoimage
    .toPng(printable)
    .then(function (dataUrl) {
      const link = document.createElement('a');
      link.download = `${event.target.dataset.fileName}.jpeg`;
      link.href = dataUrl;
      link.click();
    })
    .catch(function (error) {
      console.error('Oops, something went wrong!', error);
    });
}
