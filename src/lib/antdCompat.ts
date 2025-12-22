import { createRoot } from 'react-dom/client';
import { unstableSetRender } from 'antd/es/config-provider/UnstableContext';

let patched = false;

export const ensureAntdCompat = () => {
  if (patched || typeof window === 'undefined') {
    return;
  }

  unstableSetRender((node, container) => {
    const root = container.__ANTD_COMPAT_ROOT__ ?? createRoot(container);
    container.__ANTD_COMPAT_ROOT__ = root;
    root.render(node);
    return async () => {
      root.unmount();
      delete container.__ANTD_COMPAT_ROOT__;
    };
  });

  patched = true;
};

declare global {
  interface Element {
    __ANTD_COMPAT_ROOT__?: ReturnType<typeof createRoot>;
  }
  interface DocumentFragment {
    __ANTD_COMPAT_ROOT__?: ReturnType<typeof createRoot>;
  }
}
