/**====================================================
 * @author Jeycorp
 * @brief 실제 서버를 대신하여 server라고 가정한 스크립트
 **====================================================
 * [!] global const 제외한 server.js 내 코드는 수정 금지
 **====================================================
 */
// global const
var TOTAL_CONTENTS_NUMBER = 55;
var ITEMS_PER_PAGE = 6;

var Server = (function () {
  var items = null;

  function Server(data) {
    if (TOTAL_CONTENTS_NUMBER === 0 || data.length < TOTAL_CONTENTS_NUMBER) {
      TOTAL_CONTENTS_NUMBER = data.length;
    }
    else if (TOTAL_CONTENTS_NUMBER > 1) {
      data.splice(TOTAL_CONTENTS_NUMBER);
    }

    console.log(data);
    items = data;
  }

  Server.prototype.fetch = function (offset) {
    if (!items) {
      return [];
    }

    offset = offset || 1;

    return items.slice(ITEMS_PER_PAGE * (offset - 1), offset * ITEMS_PER_PAGE);
  };

  return Server;
})();

var server = null;

$.getJSON('../data.json', function (data) {
  server = new Server(data);

  var $script = document.createElement('script');
  $script.src = 'js/client.js';
  document.body.appendChild($script);
});
