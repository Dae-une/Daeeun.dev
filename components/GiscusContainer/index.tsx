import Giscus from '@giscus/react';
import METADATA from 'constants/constants';

const GiscusContainer = () => {
  return (
    <footer>
      <Giscus
        repo={`${METADATA.giscus.owner}/${METADATA.giscus.repo}`}
        repoId="R_kgDOIxL4hA"
        category="General"
        categoryId="DIC_kwDOIxL4hM4CT_JR"
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        theme="dark"
        lang="ko"
      />
    </footer>
  );
};

export default GiscusContainer;
