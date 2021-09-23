import {optimizeTemplateHTML} from '../../lib/utils.js';

const pickerTemplate = optimizeTemplateHTML(`<div class="datepicker hidden">
  <div class="datepicker-picker inline-block rounded-lg bg-white shadow-lg p-4">
    <div class="datepicker-header">
      <div class="datepicker-title bg-white px-2 py-3 text-center font-semibold"></div>
      <div class="datepicker-controls mb-3">
        <button type="button" class="bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-900 text-lg py-1 px-3 focus:outline-none focus:ring-2 focus:ring-gray-200 prev-btn"></button>
        <button type="button" class="text-sm text-gray-900 bg-white font-semibold hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 view-switch"></button>
        <button type="button" class="bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-900 text-lg py-1 px-3 focus:outline-none focus:ring-2 focus:ring-gray-200 next-btn"></button>
      </div>
    </div>
    <div class="datepicker-main p-1"></div>
    <div class="datepicker-footer">
      <div class="datepicker-controls">
        <button type="button" class="%buttonClass% today-btn"></button>
        <button type="button" class="%buttonClass% clear-btn"></button>
      </div>
    </div>
  </div>
</div>`);

export default pickerTemplate;
