import { View } from '@antv/data-set';

const dv = new View();
const { transform } = dv.source();

console.log(dv.source())

export default {
  //字段过滤
  pickTransform(fields) {
    return transform({
      type: 'pick',
      fields: fields
    })
  },
  //数据加工
  mapTransform(data) {
    return transform({
      type: 'map',
      callback(row) {
        row.newCol = '4';
        return row;
      }
    })
  },
  //重命名数组字段
  reNameTransform(map) {
    return transform({
      type: 'rename',
      map: map,
    })
  }
}

