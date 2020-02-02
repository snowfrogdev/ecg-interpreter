import { Component, OnInit } from '@angular/core';
import { IDecisionTree, TreeNode, nodeList } from '../_models/node';

@Component({
  selector: 'app-decision-tree-form',
  templateUrl: './decision-tree-form.component.html',
  styleUrls: ['./decision-tree-form.component.css']
})
export class DecisionTreeFormComponent implements OnInit {
  public decisionTree: IDecisionTree;
  public currentNode: TreeNode;

  constructor() {}

  ngOnInit() {
    this.reset();
  }

  /**
   * Initiate base node and tree.
   */
  public reset() {
    this.decisionTree = [];
    this.currentNode = Object.assign({}, nodeList.chestPain);
  }

  public yes() {
    this.currentNode.decision = true;
    this.pushNode();
    this.currentNode = Object.assign({}, nodeList[this.currentNode.yesId]);
    if (this.isFinal(this.currentNode)) {
      this.pushNode();
    }
  }

  public no() {
    this.currentNode.decision = false;
    this.pushNode();
    this.currentNode = Object.assign({}, nodeList[this.currentNode.noId]);
    if (this.isFinal(this.currentNode)) {
      this.pushNode();
    }
  }

  public isFinal = (node: TreeNode) =>
    node.yesId === null && node.noId === null;

  private pushNode(): void {
    this.decisionTree.push({
      node: this.currentNode,
      index: this.decisionTree.length
    });
    console.warn(this.decisionTree);
  }
}
