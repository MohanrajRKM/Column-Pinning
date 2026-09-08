import{j as e}from"./index-CTAXdLKx.js";import{r as c}from"./index-D5jfS-9e.js";import{G as g}from"./Aggregate-Ddr0Viph.js";import"./client-Spw3EFno.js";const m=[{OrderID:10248,CustomerName:"VINET",OrderDate:"1996-07-04",Freight:32.38},{OrderID:10249,CustomerName:"TOMSP",OrderDate:"1996-07-05",Freight:11.61},{OrderID:10250,CustomerName:"HANAR",OrderDate:"1996-07-08",Freight:65.83},{OrderID:10251,CustomerName:"VICTE",OrderDate:"1996-07-08",Freight:41.34},{OrderID:10252,CustomerName:"SUPRD",OrderDate:"1996-07-09",Freight:51.3}],x={10248:[{LineID:1,OrderID:10248,ProductName:"Queso Cabrales",Quantity:12,UnitPrice:14,LineAmount:168},{LineID:2,OrderID:10248,ProductName:"Singaporean Hokkien Fried Mee",Quantity:10,UnitPrice:9.8,LineAmount:98}],10249:[{LineID:1,OrderID:10249,ProductName:"Mozzarella di Giovanni",Quantity:14,UnitPrice:34.8,LineAmount:487.2},{LineID:2,OrderID:10249,ProductName:"Emmental Switzerland",Quantity:14,UnitPrice:34.8,LineAmount:487.2}],10250:[{LineID:1,OrderID:10250,ProductName:"Côte de Blaye",Quantity:6,UnitPrice:55,LineAmount:330}],10251:[{LineID:1,OrderID:10251,ProductName:"Raclette Courdavault",Quantity:4,UnitPrice:55,LineAmount:220},{LineID:2,OrderID:10251,ProductName:"Tarte au sucre",Quantity:2,UnitPrice:49.3,LineAmount:98.6}],10252:[{LineID:1,OrderID:10252,ProductName:"King Crab",Quantity:28,UnitPrice:45.6,LineAmount:1276.8},{LineID:2,OrderID:10252,ProductName:"Røde Ø",Quantity:15,UnitPrice:7.75,LineAmount:116.25}]},k=l=>{const a=l.OrderID,i=x[a]||[];return e.jsxs("div",{style:{padding:"20px",backgroundColor:"#f5f5f5",borderLeft:"4px solid #007bff"},children:[e.jsxs("div",{style:{marginBottom:"15px"},children:[e.jsxs("h4",{style:{marginTop:0,color:"#333"},children:["Order Lines for Order #",a]}),e.jsxs("p",{style:{fontSize:"12px",color:"#666"},children:["Total Lines: ",e.jsx("strong",{children:i.length})," | Total Amount:"," ",e.jsxs("strong",{children:["$",i.reduce((n,r)=>n+r.LineAmount,0).toFixed(2)]})]})]}),e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",backgroundColor:"white",fontSize:"13px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{backgroundColor:"#e8f0fe",borderBottom:"1px solid #ddd"},children:[e.jsx("th",{style:{padding:"10px",textAlign:"left",fontWeight:600,borderRight:"1px solid #ddd"},children:"Line ID"}),e.jsx("th",{style:{padding:"10px",textAlign:"left",fontWeight:600,borderRight:"1px solid #ddd"},children:"Product Name"}),e.jsx("th",{style:{padding:"10px",textAlign:"center",fontWeight:600,borderRight:"1px solid #ddd"},children:"Quantity"}),e.jsx("th",{style:{padding:"10px",textAlign:"right",fontWeight:600,borderRight:"1px solid #ddd"},children:"Unit Price"}),e.jsx("th",{style:{padding:"10px",textAlign:"right",fontWeight:600},children:"Amount"})]})}),e.jsx("tbody",{children:i.map((n,r)=>e.jsxs("tr",{style:{backgroundColor:r%2===0?"#ffffff":"#f9f9f9",borderBottom:"1px solid #eee"},children:[e.jsx("td",{style:{padding:"10px",borderRight:"1px solid #eee"},children:n.LineID}),e.jsx("td",{style:{padding:"10px",borderRight:"1px solid #eee"},children:n.ProductName}),e.jsx("td",{style:{padding:"10px",textAlign:"center",borderRight:"1px solid #eee"},children:n.Quantity}),e.jsxs("td",{style:{padding:"10px",textAlign:"right",borderRight:"1px solid #eee"},children:["$",n.UnitPrice.toFixed(2)]}),e.jsxs("td",{style:{padding:"10px",textAlign:"right",fontWeight:500},children:["$",n.LineAmount.toFixed(2)]})]},n.LineID))})]})})]})},o=()=>{const l={dataSource:m,isMasterDetail:!0,detailRowTemplate:k,rowHeight:36,columns:[{field:"OrderID",headerText:"Order ID",width:100},{field:"CustomerName",headerText:"Customer",width:150},{field:"OrderDate",headerText:"Order Date",width:130},{field:"Freight",headerText:"Freight",width:100}]};return e.jsxs("div",{style:{width:"100%",height:"600px",padding:"20px"},children:[e.jsx("h3",{children:"Master-Detail Grid with Order Lines (Traditional Template Approach)"}),e.jsx("p",{children:"Click the expand arrow to see order line details using the traditional detailRowTemplate"}),e.jsx("div",{style:{height:"100%",border:"1px solid #ddd"},children:e.jsx(g,{...l})})]})},h=()=>{const[l,a]=c.useState(new Set),i=c.useCallback(t=>{console.log("📋 Detail Grid Data Request",{OrderID:t,timestamp:new Date().toISOString()}),setTimeout(()=>{const s=x[t]||[];console.log("✅ Data loaded successfully",{OrderID:t,lineCount:s.length})},500)},[]);c.useCallback(t=>{console.log("🔧 Detail Grid Created",{OrderID:t,timestamp:new Date().toISOString()}),a(s=>{const d=new Set(s);return d.add(t),d})},[]),c.useCallback(t=>{console.log("🗑️ Detail Grid Destroyed",{OrderID:t,timestamp:new Date().toISOString()}),a(s=>{const d=new Set(s);return d.delete(t),d})},[]);const r={dataSource:m,isMasterDetail:!0,detailRowTemplate:t=>{i(t.OrderID);const s=x[t.OrderID]||[];return e.jsxs("div",{style:{padding:"20px",backgroundColor:"#f0f8ff"},children:[e.jsxs("div",{style:{marginBottom:"10px"},children:[e.jsxs("span",{style:{color:"#0066cc",fontWeight:"bold"},children:["Callback-based Detail Grid for Order #",t.OrderID]}),l.has(t.OrderID)&&e.jsx("span",{style:{marginLeft:"10px",color:"#28a745"},children:"✓ Loaded"})]}),e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",backgroundColor:"white"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{backgroundColor:"#f0f8ff",borderBottom:"2px solid #0066cc"},children:[e.jsx("th",{style:{padding:"8px",textAlign:"left"},children:"Product"}),e.jsx("th",{style:{padding:"8px",textAlign:"center"},children:"Qty"}),e.jsx("th",{style:{padding:"8px",textAlign:"right"},children:"Price"}),e.jsx("th",{style:{padding:"8px",textAlign:"right"},children:"Amount"})]})}),e.jsx("tbody",{children:s.map(d=>e.jsxs("tr",{style:{borderBottom:"1px solid #e0e0e0"},children:[e.jsx("td",{style:{padding:"8px"},children:d.ProductName}),e.jsx("td",{style:{padding:"8px",textAlign:"center"},children:d.Quantity}),e.jsxs("td",{style:{padding:"8px",textAlign:"right"},children:["$",d.UnitPrice.toFixed(2)]}),e.jsxs("td",{style:{padding:"8px",textAlign:"right",fontWeight:"bold"},children:["$",d.LineAmount.toFixed(2)]})]},d.LineID))})]})]})},rowHeight:36,columns:[{field:"OrderID",headerText:"Order ID",width:100},{field:"CustomerName",headerText:"Customer",width:150},{field:"OrderDate",headerText:"Order Date",width:130},{field:"Freight",headerText:"Freight",width:100}]};return e.jsxs("div",{style:{width:"100%",height:"600px",padding:"20px"},children:[e.jsx("h3",{children:"Nested Detail Grid with Callbacks & Lifecycle Hooks"}),e.jsxs("p",{children:["Open browser console (F12) to see callback execution and lifecycle events logged. Expanded rows: ",l.size]}),e.jsx("div",{style:{height:"100%",border:"1px solid #ddd"},children:e.jsx(g,{...r})})]})},p=()=>{const a={dataSource:m,isMasterDetail:!0,detailRowTemplate:i=>{const n=x[i.OrderID]||[];return e.jsxs("div",{style:{padding:"20px",backgroundColor:"#fff3cd",borderLeft:"4px solid #ffc107"},children:[e.jsxs("h5",{style:{margin:"0 0 10px 0"},children:["Level 2: Order Lines for Order #",i.OrderID," (Max Nesting Depth: 3)"]}),e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",backgroundColor:"white"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{backgroundColor:"#fff3cd"},children:[e.jsx("th",{style:{padding:"8px",textAlign:"left"},children:"Line ID"}),e.jsx("th",{style:{padding:"8px",textAlign:"left"},children:"Product"}),e.jsx("th",{style:{padding:"8px",textAlign:"center"},children:"Qty"}),e.jsx("th",{style:{padding:"8px",textAlign:"right"},children:"Price"}),e.jsx("th",{style:{padding:"8px",textAlign:"right"},children:"Amount"})]})}),e.jsx("tbody",{children:n.map(r=>e.jsxs("tr",{style:{borderBottom:"1px solid #ddd"},children:[e.jsx("td",{style:{padding:"8px"},children:r.LineID}),e.jsx("td",{style:{padding:"8px"},children:r.ProductName}),e.jsx("td",{style:{padding:"8px",textAlign:"center"},children:r.Quantity}),e.jsxs("td",{style:{padding:"8px",textAlign:"right"},children:["$",r.UnitPrice.toFixed(2)]}),e.jsxs("td",{style:{padding:"8px",textAlign:"right",fontWeight:"bold"},children:["$",r.LineAmount.toFixed(2)]})]},r.LineID))})]}),e.jsx("p",{style:{marginTop:"10px",fontSize:"12px",color:"#666"},children:"📌 Note: Additional levels can be expanded if configured (Level 3 would show serial numbers, etc.)"})]})},rowHeight:36,maxNestingDepth:3,childDataPath:"OrderID",columns:[{field:"OrderID",headerText:"Order ID",width:100},{field:"CustomerName",headerText:"Customer",width:150},{field:"OrderDate",headerText:"Order Date",width:130},{field:"Freight",headerText:"Freight",width:100}]};return e.jsxs("div",{style:{width:"100%",height:"600px",padding:"20px"},children:[e.jsx("h3",{children:"Multi-Level Nested Grids (Level 1 & 2 with Depth Limit)"}),e.jsx("p",{children:"Demonstrates recursive nesting support up to 3 levels. Click expand to see Order Lines (Level 2). Depth enforcement prevents infinite recursion."}),e.jsx("div",{style:{height:"100%",border:"1px solid #ddd"},children:e.jsx(g,{...a})}),e.jsxs("div",{style:{marginTop:"20px",padding:"15px",backgroundColor:"#e8f4f8",borderRadius:"4px"},children:[e.jsx("h4",{style:{marginTop:0},children:"📊 Nesting Levels"}),e.jsxs("ul",{style:{margin:"10px 0",paddingLeft:"20px"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Level 1 (Depth 0)"}),": Orders - Master grid showing order information"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Level 2 (Depth 1)"}),": Order Lines - Detail grid showing line items"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Level 3 (Depth 2)"}),": Additional details - Further nested data (if configured)"]})]})]})]})},F={title:"Grid/Features/Master-Detail/Nested Detail Grid",component:g,layout:"fullscreen",parameters:{docs:{description:{component:`
Demonstrates nested detail grid auto-rendering feature with:
- Traditional template-based detail rows (backward compatible)
- Callback-based data loading with lifecycle hooks
- Multi-level nesting with depth enforcement
- Open browser console (F12) to observe lifecycle events
`}}}};var u,D,y,f,w;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`(): JSX.Element => {
  const gridProps: GridProps<OrderItem> = {
    dataSource: masterData,
    isMasterDetail: true,
    detailRowTemplate: OrderLineDetailTemplate,
    rowHeight: 36,
    columns: [{
      field: 'OrderID',
      headerText: 'Order ID',
      width: 100
    }, {
      field: 'CustomerName',
      headerText: 'Customer',
      width: 150
    }, {
      field: 'OrderDate',
      headerText: 'Order Date',
      width: 130
    }, {
      field: 'Freight',
      headerText: 'Freight',
      width: 100
    }]
  };
  return <div style={{
    width: '100%',
    height: '600px',
    padding: '20px'
  }}>\r
            <h3>Master-Detail Grid with Order Lines (Traditional Template Approach)</h3>\r
            <p>Click the expand arrow to see order line details using the traditional detailRowTemplate</p>\r
            <div style={{
      height: '100%',
      border: '1px solid #ddd'
    }}>\r
                <Grid {...gridProps} />\r
            </div>\r
        </div>;
}`,...(y=(D=o.parameters)==null?void 0:D.docs)==null?void 0:y.source},description:{story:`Story 1: Master Detail with Traditional detailRowTemplate\r
Demonstrates backward-compatible detail row rendering`,...(w=(f=o.parameters)==null?void 0:f.docs)==null?void 0:w.description}}};var b,O,I,j,L;h.parameters={...h.parameters,docs:{...(b=h.parameters)==null?void 0:b.docs,source:{originalSource:`(): JSX.Element => {
  const [expandedRows, setExpandedRows] = useState<Set<number>>(new Set());

  /**\r
   * Callback handler for detail grid data requests\r
   */
  const handleDetailGridDataRequest = useCallback((orderID: number) => {
    console.log('📋 Detail Grid Data Request', {
      OrderID: orderID,
      timestamp: new Date().toISOString()
    });

    // Simulate async data loading
    setTimeout(() => {
      const lines = detailDataMap[orderID] || [];
      console.log('✅ Data loaded successfully', {
        OrderID: orderID,
        lineCount: lines.length
      });
    }, 500);
  }, []);
  const handleDetailGridCreate = useCallback((orderID: number) => {
    console.log('🔧 Detail Grid Created', {
      OrderID: orderID,
      timestamp: new Date().toISOString()
    });
    setExpandedRows(prev => {
      const updated = new Set(prev);
      updated.add(orderID);
      return updated;
    });
  }, []);
  const handleDetailGridDestroy = useCallback((orderID: number) => {
    console.log('🗑️ Detail Grid Destroyed', {
      OrderID: orderID,
      timestamp: new Date().toISOString()
    });
    setExpandedRows(prev => {
      const updated = new Set(prev);
      updated.delete(orderID);
      return updated;
    });
  }, []);
  const handleDetailRowTemplate = (data: OrderItem) => {
    handleDetailGridDataRequest(data.OrderID);
    const lineItems = detailDataMap[data.OrderID] || [];
    return <div style={{
      padding: '20px',
      backgroundColor: '#f0f8ff'
    }}>\r
                <div style={{
        marginBottom: '10px'
      }}>\r
                    <span style={{
          color: '#0066cc',
          fontWeight: 'bold'
        }}>\r
                        Callback-based Detail Grid for Order #{data.OrderID}\r
                    </span>\r
                    {expandedRows.has(data.OrderID) && <span style={{
          marginLeft: '10px',
          color: '#28a745'
        }}>✓ Loaded</span>}\r
                </div>\r
                <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        backgroundColor: 'white'
      }}>\r
                    <thead>\r
                        <tr style={{
            backgroundColor: '#f0f8ff',
            borderBottom: '2px solid #0066cc'
          }}>\r
                            <th style={{
              padding: '8px',
              textAlign: 'left'
            }}>Product</th>\r
                            <th style={{
              padding: '8px',
              textAlign: 'center'
            }}>Qty</th>\r
                            <th style={{
              padding: '8px',
              textAlign: 'right'
            }}>Price</th>\r
                            <th style={{
              padding: '8px',
              textAlign: 'right'
            }}>Amount</th>\r
                        </tr>\r
                    </thead>\r
                    <tbody>\r
                        {lineItems.map(item => <tr key={item.LineID} style={{
            borderBottom: '1px solid #e0e0e0'
          }}>\r
                                <td style={{
              padding: '8px'
            }}>{item.ProductName}</td>\r
                                <td style={{
              padding: '8px',
              textAlign: 'center'
            }}>{item.Quantity}</td>\r
                                <td style={{
              padding: '8px',
              textAlign: 'right'
            }}>\${item.UnitPrice.toFixed(2)}</td>\r
                                <td style={{
              padding: '8px',
              textAlign: 'right',
              fontWeight: 'bold'
            }}>\r
                                    \${item.LineAmount.toFixed(2)}\r
                                </td>\r
                            </tr>)}\r
                    </tbody>\r
                </table>\r
            </div>;
  };
  const gridProps: GridProps<OrderItem> = {
    dataSource: masterData,
    isMasterDetail: true,
    detailRowTemplate: handleDetailRowTemplate,
    rowHeight: 36,
    columns: [{
      field: 'OrderID',
      headerText: 'Order ID',
      width: 100
    }, {
      field: 'CustomerName',
      headerText: 'Customer',
      width: 150
    }, {
      field: 'OrderDate',
      headerText: 'Order Date',
      width: 130
    }, {
      field: 'Freight',
      headerText: 'Freight',
      width: 100
    }]
  };
  return <div style={{
    width: '100%',
    height: '600px',
    padding: '20px'
  }}>\r
            <h3>Nested Detail Grid with Callbacks & Lifecycle Hooks</h3>\r
            <p>\r
                Open browser console (F12) to see callback execution and lifecycle events logged.\r
                Expanded rows: {expandedRows.size}\r
            </p>\r
            <div style={{
      height: '100%',
      border: '1px solid #ddd'
    }}>\r
                <Grid {...gridProps} />\r
            </div>\r
        </div>;
}`,...(I=(O=h.parameters)==null?void 0:O.docs)==null?void 0:I.source},description:{story:`Story 2: Nested Detail Grid with Callbacks\r
Demonstrates callback-based data loading with lifecycle hooks`,...(L=(j=h.parameters)==null?void 0:j.docs)==null?void 0:L.description}}};var v,C,A,T,P;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`(): JSX.Element => {
  const handleDetailRowTemplate = (data: OrderItem) => {
    const lineItems = detailDataMap[data.OrderID] || [];
    return <div style={{
      padding: '20px',
      backgroundColor: '#fff3cd',
      borderLeft: '4px solid #ffc107'
    }}>\r
                <h5 style={{
        margin: '0 0 10px 0'
      }}>\r
                    Level 2: Order Lines for Order #{data.OrderID} (Max Nesting Depth: 3)\r
                </h5>\r
                <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        backgroundColor: 'white'
      }}>\r
                    <thead>\r
                        <tr style={{
            backgroundColor: '#fff3cd'
          }}>\r
                            <th style={{
              padding: '8px',
              textAlign: 'left'
            }}>Line ID</th>\r
                            <th style={{
              padding: '8px',
              textAlign: 'left'
            }}>Product</th>\r
                            <th style={{
              padding: '8px',
              textAlign: 'center'
            }}>Qty</th>\r
                            <th style={{
              padding: '8px',
              textAlign: 'right'
            }}>Price</th>\r
                            <th style={{
              padding: '8px',
              textAlign: 'right'
            }}>Amount</th>\r
                        </tr>\r
                    </thead>\r
                    <tbody>\r
                        {lineItems.map(item => <tr key={item.LineID} style={{
            borderBottom: '1px solid #ddd'
          }}>\r
                                <td style={{
              padding: '8px'
            }}>{item.LineID}</td>\r
                                <td style={{
              padding: '8px'
            }}>{item.ProductName}</td>\r
                                <td style={{
              padding: '8px',
              textAlign: 'center'
            }}>{item.Quantity}</td>\r
                                <td style={{
              padding: '8px',
              textAlign: 'right'
            }}>\${item.UnitPrice.toFixed(2)}</td>\r
                                <td style={{
              padding: '8px',
              textAlign: 'right',
              fontWeight: 'bold'
            }}>\r
                                    \${item.LineAmount.toFixed(2)}\r
                                </td>\r
                            </tr>)}\r
                    </tbody>\r
                </table>\r
                <p style={{
        marginTop: '10px',
        fontSize: '12px',
        color: '#666'
      }}>\r
                    📌 Note: Additional levels can be expanded if configured (Level 3 would show serial numbers, etc.)\r
                </p>\r
            </div>;
  };
  const gridProps: GridProps<OrderItem> = {
    dataSource: masterData,
    isMasterDetail: true,
    detailRowTemplate: handleDetailRowTemplate,
    rowHeight: 36,
    maxNestingDepth: 3,
    childDataPath: 'OrderID',
    columns: [{
      field: 'OrderID',
      headerText: 'Order ID',
      width: 100
    }, {
      field: 'CustomerName',
      headerText: 'Customer',
      width: 150
    }, {
      field: 'OrderDate',
      headerText: 'Order Date',
      width: 130
    }, {
      field: 'Freight',
      headerText: 'Freight',
      width: 100
    }]
  };
  return <div style={{
    width: '100%',
    height: '600px',
    padding: '20px'
  }}>\r
            <h3>Multi-Level Nested Grids (Level 1 & 2 with Depth Limit)</h3>\r
            <p>\r
                Demonstrates recursive nesting support up to 3 levels. Click expand to see Order Lines \r
                (Level 2). Depth enforcement prevents infinite recursion.\r
            </p>\r
            <div style={{
      height: '100%',
      border: '1px solid #ddd'
    }}>\r
                <Grid {...gridProps} />\r
            </div>\r
\r
            <div style={{
      marginTop: '20px',
      padding: '15px',
      backgroundColor: '#e8f4f8',
      borderRadius: '4px'
    }}>\r
                <h4 style={{
        marginTop: 0
      }}>📊 Nesting Levels</h4>\r
                <ul style={{
        margin: '10px 0',
        paddingLeft: '20px'
      }}>\r
                    <li>\r
                        <strong>Level 1 (Depth 0)</strong>: Orders - Master grid showing order information\r
                    </li>\r
                    <li>\r
                        <strong>Level 2 (Depth 1)</strong>: Order Lines - Detail grid showing line items\r
                    </li>\r
                    <li>\r
                        <strong>Level 3 (Depth 2)</strong>: Additional details - Further nested data (if configured)\r
                    </li>\r
                </ul>\r
            </div>\r
        </div>;
}`,...(A=(C=p.parameters)==null?void 0:C.docs)==null?void 0:A.source},description:{story:`Story 3: Multi-Level Nested Grids (3-level nesting)\r
Demonstrates recursive nesting with depth enforcement`,...(P=(T=p.parameters)==null?void 0:T.docs)==null?void 0:P.description}}};const M=["MasterDetailWithTemplate","NestedDetailGridWithCallbacks","MultiLevelNestedGrids"];export{o as MasterDetailWithTemplate,p as MultiLevelNestedGrids,h as NestedDetailGridWithCallbacks,M as __namedExportsOrder,F as default};
