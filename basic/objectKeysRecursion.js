function iter(o) {
  Object.keys(o).forEach(function (k) {
    if (o[k] !== null && typeof o[k] === 'object') {
      iter(o[k])
      return
    }
    // if (typeof o[k] === 'string') {
    //     o[k] = o[k].replace(/'/g, "''");
    // }
    if (k === 'selected' && o[k]) {
      o[k] = false
      return
    }
  })
}

var data = {
  ffs: false,
  customer: { customer_id: 1544248, z_cx_id: '123456' },
  selected_items: {
    3600196: [
      { id: 4122652, name: "Essential Large (up to 8'x10')", selected: true },
    ],
  },
  service_partner: { id: 3486, name: 'Some String', street: '1234 King St.' },
  subject: 'Project-2810191 - Orange Juice Stain (Rug)',
  description:
    'Product Type: \n\nIssue: (copy/paste service request details here)\n\nAction Required:',
}
const cloneData = JSON.parse(JSON.stringify(data))

// iter(cloneData);
// console.log(cloneData);
// console.log(data);

console.log(Object.keys(data.selected_items['3600196'][0]))
