export type IDecisionTree = Array<IIndexedTreeNode>;

export interface IIndexedTreeNode {
  node: TreeNode;
  index: number;
}

export class TreeNode {
  public decision?: boolean;
  constructor(
    public readonly id: NodeId,
    public readonly description: string,
    public readonly yesId?: NodeId,
    public readonly noId?: NodeId
  ) {}
}

/**
 * Possible values for a node id.
 */
export type NodeId =
  | 'chestPain'
  | 'twaveInversion'
  | 'rateOver100'
  | 'hypotensive'
  | 'nstemi'
  | 'unstableAngina'
  | 'sedate'
  | 'qrsOver012'
  | 'vtGetExpertHelp'
  | 'qrsRegular'
  | 'svtVagal'
  | 'pwavesPresent'
  | 'atrialFibrilation'
  | 'aflutter'
  | 'rate100temp';
/**
 * Dictionary of nodes by their id.
 */
export const nodeList = {
  chestPain: new TreeNode(
    'chestPain',
    'Chest Pain?',
    'twaveInversion',
    'rateOver100'
  ),
  twaveInversion: new TreeNode(
    'twaveInversion',
    'Twave Inversion?',
    'nstemi',
    'unstableAngina'
  ),
  unstableAngina: new TreeNode('unstableAngina', 'Unstable Angina', null, null),
  nstemi: new TreeNode('nstemi', 'NSTEMI', null, null),
  rateOver100: new TreeNode(
    'rateOver100',
    'Rate > 100?',
    'hypotensive',
    'rate100temp'
  ),
  hypotensive: new TreeNode(
    'hypotensive',
    'Hypotensive?',
    'sedate',
    'qrsOver012'
  ),
  sedate: new TreeNode('sedate', 'Sedate.', null, null),
  qrsOver012: new TreeNode(
    'qrsOver012',
    'QRS > 0.12s ?',
    'vtGetExpertHelp',
    'qrsRegular'
  ),
  vtGetExpertHelp: new TreeNode(
    'vtGetExpertHelp',
    'VT Get expert help.',
    null,
    null
  ),
  qrsRegular: new TreeNode(
    'qrsRegular',
    'QRS regular?',
    'svtVagal',
    'pwavesPresent'
  ),
  svtVagal: new TreeNode('svtVagal', 'SVT Vagal', null, null),
  pwavesPresent: new TreeNode(
    'pwavesPresent',
    'Pwaves present?',
    'aflutter',
    'atrialFibrilation'
  ),
  aflutter: new TreeNode('aflutter', 'Aflutter', null, null),
  atrialFibrilation: new TreeNode(
    'atrialFibrilation',
    'Afrial fibrilation',
    null,
    null
  ),
  rate100temp: new TreeNode(
    'rate100temp',
    'Rate < 100 answer (no node given)',
    null,
    null
  )
};
