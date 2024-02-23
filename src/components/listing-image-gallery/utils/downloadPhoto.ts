/* eslint-disable no-console */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-param-reassign */
function forceDownload(blobUrl: string, filename: string) {
  const a: any = document.createElement('a');
  a.download = filename;
  a.href = blobUrl;
  document.body.appendChild(a);
  a.click();
  a.remove();
}

export default function downloadPhoto(url: string, filename: string) {
  if (!filename) {
    filename = url.split('\\').pop()?.split('/').pop() || '';
  }
  fetch(url, {
    headers: new Headers({
      Origin: location.origin,
    }),
    mode: 'cors',
  })
    .then((response) => response.blob())
    .then((blob) => {
      const blobUrl = window.URL.createObjectURL(blob);
      forceDownload(blobUrl, filename);
    })
    .catch((e) => console.error(e));
}
