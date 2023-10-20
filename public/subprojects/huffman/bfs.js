var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

const LEFT = 0;
const RIGHT = 1;

class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
    this.parent = null;
    this.pos = { x: 0, y: 0 };
    this.r = 30;
  }

  get left() {
    return this.children[LEFT];
  }

  set left(value) {
    value.parent = this;
    this.children[LEFT] = value;
  }

  get right() {
    return this.children[RIGHT];
  }

  set right(value) {
    value.parent = this;
    this.children[RIGHT] = value;
  }

  set position(position) {
    this.pos = position;
  }

  get position() {
    return this.pos;
  }

  get radius() {
    return this.r;
  }
}

class Tree {
  constructor({ width, height, midpoint, axisX, axisY }) {
    (c.width = width), (c.height = height);
    this.root = null;
    this.startPosition = { x: midpoint ?? 4000, y: 44 };
    this.axisX = axisX ?? 4000;
    this.axisY = axisY ?? 100;
  }

  getPosition({ x, y }, isLeft = false, height, maxHeight) {
    const diff = maxHeight - height;
    const diffX = this.axisX * Math.pow(1 / 2, diff);

    return {
      x: isLeft ? x - diffX : x + diffX,
      y: y + this.axisY,
    };
  }

  add(value, parentNode, isLeft, height, maxHeight) {
    const newNode = new Node(value);
    if (this.root == null) {
      newNode.position = this.startPosition;
      this.root = newNode;
    } else {
      newNode.position = this.getPosition(
        parentNode.position,
        isLeft,
        height,
        maxHeight
      );
    }

    if (parentNode != null) {
      if (isLeft) parentNode.left = newNode;
      else parentNode.right = newNode;
    }

    return newNode;
  }

  all(node) {
    if (node === undefined) return;
    else {
      console.log(node.value);
      this.all(node.left);
      this.all(node.right);
    }
  }

  getAll() {
    this.all(this.root);
  }

  render(node = null) {
    if (node == null) node = this.root;
    const { x, y } = node.position;
    //    console.log("Tree.render()", node);

    ctx.beginPath();
    ctx.arc(x, y, node.radius, 0, 2 * Math.PI);
    ctx.strokeStyle = "#000";
    ctx.fillStyle = "#fff";
    ctx.fill();
    ctx.stroke();
    ctx.strokeStyle = "#000";
    ctx.strokeText(
      node.value,
      x - (node.value.length > 1 ? node.value.length : 0),
      y
    );

    const renderChild = (child) => {
      //    console.log("renderChild", child);
      if (child == null) return;

      const { x: x1, y: y1 } = child.position;
      ctx.beginPath();
      ctx.moveTo(x, y + child.radius);
      ctx.lineTo(x1, y1 - child.radius);
      ctx.stroke();
      this.render(child);
    };

    renderChild(node.left);
    renderChild(node.right);
  }

  bfs() {
    const queue = [];
    const black = "#000";

    queue.push(this.root);

    while (queue.length !== 0) {
      const node = queue.shift();
      const { x, y } = node.position;

      ctx.beginPath();
      ctx.arc(x, y, node.radius, 0, 2 * Math.PI);
      ctx.strokeStyle = black;
      ctx.fillStyle = "#fff";
      ctx.fill();
      ctx.stroke();
      ctx.strokeStyle = black;
      ctx.strokeText(node.value, x, y);

      node.children.forEach((child) => {
        const { x: x1, y: y1 } = child.position;
        ctx.beginPath();
        ctx.moveTo(x, y + child.radius);
        ctx.lineTo(x1, y1 - child.radius);
        ctx.stroke();
        queue.push(child);
      });
    }
  }
}

// node - can be null, can be an inner vertex or a leaf
function addNode(t, node, parentNode, isLeft, height, maxHeight) {
  if (node == null) return;
  //console.log({ node, parentNode, isLeft });
  const newNode = t.add(
    `${node.value}${
      node.key == null ? "" : ` - ${node.key == " " ? "_" : node.key}`
    }`,
    parentNode,
    isLeft,
    height,
    maxHeight
  );

  addNode(t, node.left, newNode, true, height - 1, maxHeight);
  addNode(t, node.right, newNode, false, height - 1, maxHeight);
}

const changeCanvas = (maxHeight) => {
  const DISTANCES_LAST_LAYER = 60;
  const numberOfNodesLastLayer = Math.pow(2, maxHeight - 1);
  const width = numberOfNodesLastLayer * DISTANCES_LAST_LAYER;
  const midpoint = width / 2;
  const height = 100 * maxHeight;
  const axisX = DISTANCES_LAST_LAYER * Math.pow(2, maxHeight - 2);
  const axisY = 100;
  return { width, height, midpoint, axisX, axisY };
};

const calculateHeight = (node) => {
  if (node == null) return 0;
  const left = calculateHeight(node.left),
    right = calculateHeight(node.right);
  if (left < right) return right + 1;
  else return left + 1;
};

function renderTree(node) {
  const maxHeight = calculateHeight(node);
  const calculated = changeCanvas(maxHeight);
  console.log(calculated, maxHeight);
  const t = new Tree(calculated);
  addNode(t, node, null, null, maxHeight, maxHeight);
  t.render(null, maxHeight);
}

const main = (json = null) => {
  renderTree(json ?? testing3);
};

if (window.main == undefined) window.main = main;

const testing = {
  key: null,
  value: 18,
  left: {
    key: "a",
    value: 8,
    left: null,
    right: null,
  },
  right: {
    key: null,
    value: 10,
    left: {
      key: null,
      value: 4,
      left: {
        key: "k",
        value: 2,
        left: null,
        right: null,
      },
      right: {
        key: "p",
        value: 2,
        left: null,
        right: null,
      },
    },
    right: {
      key: null,
      value: 6,
      left: {
        key: null,
        value: 3,
        left: {
          key: "n",
          value: 1,
          left: null,
          right: null,
        },
        right: {
          key: "b",
          value: 2,
          left: null,
          right: null,
        },
      },
      right: {
        key: "g",
        value: 3,
        left: null,
        right: null,
      },
    },
  },
};

const testing3 = {
  key: null,
  value: 41,
  left: {
    key: null,
    value: 17,
    left: {
      key: null,
      value: 8,
      left: {
        key: null,
        value: 4,
        left: {
          key: "b",
          value: 2,
          left: null,
          right: null,
        },
        right: {
          key: "d",
          value: 2,
          left: null,
          right: null,
        },
      },
      right: {
        key: null,
        value: 4,
        left: {
          key: "g",
          value: 2,
          left: null,
          right: null,
        },
        right: {
          key: "h",
          value: 2,
          left: null,
          right: null,
        },
      },
    },
    right: {
      key: null,
      value: 9,
      left: {
        key: null,
        value: 4,
        left: {
          key: null,
          value: 2,
          left: {
            key: "l",
            value: 1,
            left: null,
            right: null,
          },
          right: {
            key: "t",
            value: 1,
            left: null,
            right: null,
          },
        },
        right: {
          key: "s",
          value: 2,
          left: null,
          right: null,
        },
      },
      right: {
        key: "n",
        value: 5,
        left: null,
        right: null,
      },
    },
  },
  right: {
    key: null,
    value: 24,
    left: {
      key: null,
      value: 11,
      left: {
        key: " ",
        value: 5,
        left: null,
        right: null,
      },
      right: {
        key: null,
        value: 6,
        left: {
          key: "i",
          value: 3,
          left: null,
          right: null,
        },
        right: {
          key: "k",
          value: 3,
          left: null,
          right: null,
        },
      },
    },
    right: {
      key: "a",
      value: 13,
      left: null,
      right: null,
    },
  },
};

const testing2 = {
  key: null,
  value: 1396,
  left: {
    key: null,
    value: 574,
    left: {
      key: " ",
      value: 281,
      left: null,
      right: null,
    },
    right: {
      key: null,
      value: 293,
      left: {
        key: null,
        value: 143,
        left: {
          key: null,
          value: 71,
          left: {
            key: null,
            value: 35,
            left: {
              key: "u",
              value: 17,
              left: null,
              right: null,
            },
            right: {
              key: null,
              value: 18,
              left: {
                key: null,
                value: 9,
                left: {
                  key: "A",
                  value: 4,
                  left: null,
                  right: null,
                },
                right: {
                  key: null,
                  value: 5,
                  left: {
                    key: "V",
                    value: 2,
                    left: null,
                    right: null,
                  },
                  right: {
                    key: "C",
                    value: 3,
                    left: null,
                    right: null,
                  },
                },
              },
              right: {
                key: "W",
                value: 9,
                left: null,
                right: null,
              },
            },
          },
          right: {
            key: "g",
            value: 36,
            left: null,
            right: null,
          },
        },
        right: {
          key: "t",
          value: 72,
          left: null,
          right: null,
        },
      },
      right: {
        key: null,
        value: 150,
        left: {
          key: "a",
          value: 75,
          left: null,
          right: null,
        },
        right: {
          key: null,
          value: 75,
          left: {
            key: "s",
            value: 37,
            left: null,
            right: null,
          },
          right: {
            key: "m",
            value: 38,
            left: null,
            right: null,
          },
        },
      },
    },
  },
  right: {
    key: null,
    value: 822,
    left: {
      key: null,
      value: 350,
      left: {
        key: null,
        value: 166,
        left: {
          key: null,
          value: 80,
          left: {
            key: null,
            value: 39,
            left: {
              key: "y",
              value: 19,
              left: null,
              right: null,
            },
            right: {
              key: null,
              value: 20,
              left: {
                key: ".",
                value: 10,
                left: null,
                right: null,
              },
              right: {
                key: "T",
                value: 10,
                left: null,
                right: null,
              },
            },
          },
          right: {
            key: "l",
            value: 41,
            left: null,
            right: null,
          },
        },
        right: {
          key: "o",
          value: 86,
          left: null,
          right: null,
        },
      },
      right: {
        key: null,
        value: 184,
        left: {
          key: null,
          value: 87,
          left: {
            key: "r",
            value: 43,
            left: null,
            right: null,
          },
          right: {
            key: null,
            value: 44,
            left: {
              key: null,
              value: 21,
              left: {
                key: "p",
                value: 10,
                left: null,
                right: null,
              },
              right: {
                key: "?",
                value: 11,
                left: null,
                right: null,
              },
            },
            right: {
              key: null,
              value: 23,
              left: {
                key: "f",
                value: 11,
                left: null,
                right: null,
              },
              right: {
                key: null,
                value: 12,
                left: {
                  key: null,
                  value: 6,
                  left: {
                    key: null,
                    value: 3,
                    left: {
                      key: "P",
                      value: 1,
                      left: null,
                      right: null,
                    },
                    right: {
                      key: null,
                      value: 2,
                      left: {
                        key: "E",
                        value: 1,
                        left: null,
                        right: null,
                      },
                      right: {
                        key: "H",
                        value: 1,
                        left: null,
                        right: null,
                      },
                    },
                  },
                  right: {
                    key: "M",
                    value: 3,
                    left: null,
                    right: null,
                  },
                },
                right: {
                  key: null,
                  value: 6,
                  left: {
                    key: "N",
                    value: 3,
                    left: null,
                    right: null,
                  },
                  right: {
                    key: "S",
                    value: 3,
                    left: null,
                    right: null,
                  },
                },
              },
            },
          },
        },
        right: {
          key: null,
          value: 97,
          left: {
            key: null,
            value: 47,
            left: {
              key: "b",
              value: 23,
              left: null,
              right: null,
            },
            right: {
              key: "w",
              value: 24,
              left: null,
              right: null,
            },
          },
          right: {
            key: "i",
            value: 50,
            left: null,
            right: null,
          },
        },
      },
    },
    right: {
      key: null,
      value: 472,
      left: {
        key: null,
        value: 222,
        left: {
          key: "e",
          value: 109,
          left: null,
          right: null,
        },
        right: {
          key: "n",
          value: 113,
          left: null,
          right: null,
        },
      },
      right: {
        key: null,
        value: 250,
        left: {
          key: null,
          value: 118,
          left: {
            key: null,
            value: 55,
            left: {
              key: "k",
              value: 27,
              left: null,
              right: null,
            },
            right: {
              key: null,
              value: 28,
              left: {
                key: "v",
                value: 12,
                left: null,
                right: null,
              },
              right: {
                key: "!",
                value: 16,
                left: null,
                right: null,
              },
            },
          },
          right: {
            key: null,
            value: 63,
            left: {
              key: "I",
              value: 31,
              left: null,
              right: null,
            },
            right: {
              key: null,
              value: 32,
              left: {
                key: ",",
                value: 16,
                left: null,
                right: null,
              },
              right: {
                key: "d",
                value: 16,
                left: null,
                right: null,
              },
            },
          },
        },
        right: {
          key: null,
          value: 132,
          left: {
            key: null,
            value: 66,
            left: {
              key: "c",
              value: 32,
              left: null,
              right: null,
            },
            right: {
              key: "'",
              value: 34,
              left: null,
              right: null,
            },
          },
          right: {
            key: "h",
            value: 66,
            left: null,
            right: null,
          },
        },
      },
    },
  },
};
main();
