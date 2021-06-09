// CSS
import 'wix-rich-content-editor-common/dist/styles.min.css';
import 'wix-rich-content-plugin-commons/dist/styles.min.css';
import 'wix-rich-content-common/dist/styles.min.css';
import 'wix-rich-content-editor/dist/styles.min.css';
import 'wix-rich-content-plugin-button/dist/styles.min.css';
import 'wix-rich-content-plugin-divider/dist/styles.min.css';
import 'wix-rich-content-plugin-emoji/dist/styles.min.css';
import 'wix-rich-content-plugin-html/dist/styles.min.css';
import 'wix-rich-content-plugin-hashtag/dist/styles.min.css';
import 'wix-rich-content-plugin-line-spacing/dist/styles.min.css';
import 'wix-rich-content-plugin-link/dist/styles.min.css';
import 'wix-rich-content-plugin-link-preview/dist/styles.min.css';
import 'wix-rich-content-plugin-mentions/dist/styles.min.css';
import 'wix-rich-content-plugin-map/dist/styles.min.css';
import 'wix-rich-content-plugin-image/dist/styles.min.css';
import 'wix-rich-content-plugin-video/dist/styles.min.css';
import 'wix-rich-content-plugin-sound-cloud/dist/styles.min.css';
import 'wix-rich-content-plugin-giphy/dist/styles.min.css';
import 'wix-rich-content-plugin-map/dist/styles.min.css';
import 'wix-rich-content-plugin-file-upload/dist/styles.min.css';
import 'wix-rich-content-plugin-text-color/dist/styles.min.css';
import 'wix-rich-content-plugin-headings/dist/styles.min.css';
import 'wix-rich-content-plugin-collapsible-list/dist/styles.min.css';
import 'wix-rich-content-plugin-giphy/dist/styles.min.css';
import 'wix-rich-content-plugin-table/dist/styles.min.css';

// import 'wix-rich-content-plugin-unsupported-blocks/dist/styles.min.css';
import { useRef } from 'react';
import { RicosEditor } from 'ricos-editor';
import { toHtml } from 'ricos-content/libs/htmlConverters';
import { fromDraft } from 'ricos-content/libs/migrateSchema';

import { pluginVideo } from 'wix-rich-content-plugin-video';
import { pluginDivider } from 'wix-rich-content-plugin-divider';
import { pluginHtml } from 'wix-rich-content-plugin-html';
import { pluginLink } from 'wix-rich-content-plugin-link';
// import { pluginLinkPreview, LinkPreviewProviders } from 'wix-rich-content-plugin-link-preview';
import { pluginLineSpacing } from 'wix-rich-content-plugin-line-spacing';
import { pluginHashtag } from 'wix-rich-content-plugin-hashtag';
import { pluginImage } from 'wix-rich-content-plugin-image';
import { pluginUndoRedo } from 'wix-rich-content-plugin-undo-redo';
import { pluginUnsupportedBlocks } from 'wix-rich-content-plugin-unsupported-blocks';
import { pluginHeadings } from 'wix-rich-content-plugin-headings';
import { pluginCollapsibleList } from 'wix-rich-content-plugin-collapsible-list';
import { pluginMap } from 'wix-rich-content-plugin-map';
import { pluginGiphy } from 'wix-rich-content-plugin-giphy';
import { pluginTable } from 'wix-rich-content-plugin-table';
import { pluginTextColor, pluginTextHighlight } from 'wix-rich-content-plugin-text-color';

// const { Youtube, Instagram, Twitter, TikTok } = LinkPreviewProviders;
// const LinkPreviewConfig = { exposeEmbedButtons: [Youtube, Instagram, Twitter, TikTok] };

const plugins = [
  pluginUndoRedo(),
  pluginHeadings(),
  pluginLink({}),
  // pluginLinkPreview(LinkPreviewConfig),
  pluginDivider(), 
  pluginLineSpacing(),
  pluginHashtag(),
  pluginImage(),
  pluginVideo(), 
  pluginGiphy({
    giphySdkApiKey: 'mj2R4UD50xaAZZARfG1uXL75WuffWkDT'
  }),
  pluginTable(),
  pluginMap(),
  pluginHtml(),
  pluginUnsupportedBlocks(),
  pluginCollapsibleList(),
  pluginTextColor({}),
  pluginTextHighlight({})
];

function App() {
  const editorRef = useRef();
  return (    
    <div className="container">
      <button onClick={()=> {
        editorRef.current.getContentPromise()
          .then((content)=>{
            console.log('draftContent', content);

            // convert into RichContent
            const _richContent = fromDraft(content);
            console.log('RichContent', _richContent);

            // convert from RichContent to HTML
            console.log('HTML', toHtml(_richContent));
          });
      }}>Save</button>
      <RicosEditor ref={editorRef} placeholder={'Type here!'} plugins={plugins} />
    </div>
  );
}

export default App;
