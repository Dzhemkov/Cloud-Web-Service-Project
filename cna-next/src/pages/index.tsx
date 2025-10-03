declare global {
  namespace NodeJS {
    interface Global {
      prisma: any;
    }
  }
}

import React from 'react';
import { prisma } from '../../lib/prisma';
import Inventory, { InventoryProps } from '../components/Inventory';
import Layout from '../components/Layout';

export const getServerSideProps = async () => {
    // Fetch inventory records from the database using Prisma
    const inventoryrecs = await prisma.inventory.findMany({}) || [];
    return {props: {inventoryrecs: JSON.parse(JSON.stringify(inventoryrecs))}}
};

type Props = { inventoryrecs: InventoryProps[] };

const InventoryFeed: React.FC<Props> = (props) => {
    return (
        <Layout>
            <div className='page'>
                <br />
                <main>
                    {props.inventoryrecs.map((inventoryrec) => (
                        <div key={inventoryrec.id} className='post'>
                            <Inventory inventoryrec={inventoryrec} />
                        </div>
                    ))}
                </main>
            </div>
            <style jsx>{`
                .post:hover { box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2); }
                .post + .post {
                    margin-top: 2rem;
                }
            `}</style>
        </Layout>
        )
}
export default InventoryFeed;
