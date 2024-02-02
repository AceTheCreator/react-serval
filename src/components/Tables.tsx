import React from 'react';
import { Node } from 'reactflow';
import { NodeType } from '../types/nodes';


interface Children {
    nodes: NodeType[],
    active: Node | undefined
}

function Tables({ nodes, active }: Children) {
    // console.log(nodes)
    return (
        <div className="panel_table-wrapper">
            <table>
                <thead>
                    <tr>
                        <th scope="">
                            Name
                        </th>
                        <th scope="">
                            Description
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(nodes).map((node: any) => {
                        return <tr key={node} className={`panel_table-wrapper_tbody ${active?.id === node ? "panel_table-wrapper_tbody_active" : ""}`}>
                            <th scope="">
                                {node}
                            </th>
                            <td>
                                {nodes[node].description}
                            </td>
                        </tr>
                    })}
                    {/* {Object.keys((node: NodeType) => {
                        return <tr key={node.id} className={`panel_table-wrapper_tbody ${active?.id === node.id ? "panel_table-wrapper_tbody_active" : ""}`}>
                            <th scope="">
                                {node.data?.label}
                            </th>
                            <td>
                                {node.data?.schema?.description}
                            </td>
                        </tr>
                    })} */}
        </tbody>
    </table>
</div>

  )
}

export default Tables