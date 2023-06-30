const path = require('path')
const fs = require('fs')
const propertyGroups = require('stylelint-config-recess-order/groups')

const CSSCOMB_SORT_ORDER_FILE_PATH = path.resolve(__dirname, '../csscomb/sort-order.json')
const CSSCOMB_PRESET_BASE_FILE_PATH = path.resolve(__dirname, '../csscomb/preset-base.json')
const CSSCOMB_PRESET_CUSTOM_FILE_PATH = path.resolve(__dirname, '../.csscomb.json')

;(function main() {
  // generate sort-order
  const sortOrder = []
  propertyGroups.forEach(group => {
    if (!group?.properties?.length) return
    sortOrder.push(...group.properties)
  })

  // write sort-order.json
  let preset = { 'sort-order': sortOrder }
  const content = JSON.stringify(preset, null, 2)
  fs.writeFileSync(CSSCOMB_SORT_ORDER_FILE_PATH, content, 'utf8')

  // read preset-base.json
  const presetBaseContent = fs.readFileSync(CSSCOMB_PRESET_BASE_FILE_PATH, 'utf8')
  const presetBase = JSON.parse(presetBaseContent)

  // write preset.json
  preset = {
    ...presetBase,
    ...preset,
  }
  const presetContent = JSON.stringify(preset, null, 2)
  fs.writeFileSync(CSSCOMB_PRESET_CUSTOM_FILE_PATH, presetContent, 'utf8')
})()
