export const ResearchData = [
  {
    title: `Incremental cluster validity index-guided online learning for performance and robustness to presentation order`,

    description: `In streaming data applications incoming samples are processed and discarded, therefore, intelligent decision-making is crucial for the performance of lifelong learning systems. In addition, the order in which samples arrive may heavily affect the performance of online (and offline) incremental learners. The recently introduced incremental cluster validity indices (iCVIs) provide valuable aid in addressing
    such class of problems. Their primary use-case has been cluster quality monitoring; nonetheless, they have been very recently integrated in a streaming clustering method to assist the clustering task itself. In this context, the work presented here introduces the first adaptive resonance theory (ART)-based model that uses iCVIs for unsupervised and semi-supervised online learning. Moreover, it shows for the first time how
    to use iCVIs to regulate ART vigilance. The model achieves improved accuracy and robustness to ordering effects by combining topological adaptive resonance theory predictive mapping (TopoARTMAP) and an online iCVI framework — thereby being named iCVI-TopoARTMAP —, as well as employing iCVI-driven post-processing heuristics at the end of each learning step. The labeling component of the supervised learning system relies on iCVIs by replacing module B of TopoARTMAP with an online iCVI framework, which provides assignments of input samples to clusters at each iteration in accordance to any of several iCVIs. Moreover, when the novel iCVI-based match tracking is enabled, following successive worsening
    of the selected iCVI, the vigilance of iCVI-TopoARTMAP is changed until the iCVI value restarts to improve. At the end of each learning step, if enabled, any combination of the following operations can be performed: swap of categories, merge of clusters, split of clusters, prune-and-reassignment of categories, and compression of clusters. The iCVI-TopoARTMAP maintains useful properties shared by ARTMAP
    models, such as stability, immunity to catastrophic forgetting, and the many-to-one mapping capability via the map field module. On unsupervised learning experiments with a synthetic data set and deep embeddings of a real-world face image data set, iCVI-TopoARTMAP outperformed several state-ofthe-art ART-based models and another iCVI-based online clustering algorithm. Moreover, while some methods showed drastic performance changes upon different orderings, the iCVI-TopoARTMAP yielded consistent performance in all experiments, which was either superior or comparable to performances of the other methods. Similarly, in our experiments, iCVI-TopoARTMAP in semi-supervised learning mode yielded results that were either superior or comparable to a supervised nearest neighbor classifier in prediction mode.`,

    link: `https://arxiv.org/abs/2108.07743`,
  },
  {
    title: `Accelerating and improving clustering using adaptive resonance theory predictive mapping and incremental cluster validity indices`,

    description: `This paper presents an adaptive resonance theory (ART) model for unsupervised learning, namely
    iCVI-ARTMAP, which uses incremental cluster validity indices (iCVIs) to drive the clustering process
    within an ART predictive mapping (ARTMAP) model. Incorporating iCVIs to the decision-making and
    many-to-one mapping capabilities of ARTMAP can improve the choices of clusters to which samples
    are incrementally assigned. These improvements are accomplished by intelligently performing the operations of swapping sample assignments between clusters, splitting and merging clusters, and caching
    the values of variables when iCVI values need to be recomputed. Using recursive formulations enables
    iCVI-ARTMAP to considerably reduce the computational burden associated with the cluster validity
    index (CVI)-based offline incremental multi-prototype-based clustering task. Depending on the iCVI
    and the data set, it can achieve running times up to two orders of magnitude shorter than when performing the same clustering task using batch CVI computations. The aforementioned merging operation is
    performed because it is known that, when guided by a CVI, it has the potential to improve the data partition; splitting, however, is used to enforce the desired number of clusters. In this work, the incremental
    versions of Calinski-Harabasz (iCH), WB-index (iWB), Xie-Beni (iXB), Davies-Bouldin (iDB), PakhiraBandyopadhyay-Maulik (iPBM), and negentropy increment (iNI) were integrated into fuzzy ARTMAP.
    In extensive comparative experiments on synthetic benchmark data sets, iNI-ARTMAP yielded the best
    performance among these iCVI-ARTMAP variants, followed by iCH-, iWB- and iXB-ARTMAPs. Moreover, iNI-ARTMAP outperformed fuzzy ART, dual vigilance fuzzy ART, kmeans, spectral clustering,
    Gaussian mixture models and hierarchical agglomerative clustering algorithms in the vast majority of
    the synthetic benchmark data sets. It also performed competitively when clustering on projections and
    on the latent space generated by deep neural clustering models for real world image benchmark data
    sets. Naturally, the performance of iCVI-ARTMAP is subject to the selected iCVI and its suitability to
    the data at hand; fortunately, it is a general model wherein other iCVIs can be easily embedded.`,

    link: `https://arxiv.org/abs/2008.09903`,
  },
];
