import { createContext } from 'react';
import { createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
  scriptUrl: '-----'
});
const IconfontContext = createContext(IconFont);
export default IconfontContext;
