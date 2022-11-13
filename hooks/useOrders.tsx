import { useQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import { GET_ORDERS } from "../graphql/queries";

function useOrders() {
  const { loading, error, data } = useQuery(GET_ORDERS);

  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    if (!data) return;
    const orders: Order[] = data.getOrders.map(({ value }: OrderResponse) => ({
      carrier: value.carrier,
      Address: value.Address,
      City: value.City,
      Lat: value.Lat,
      Lng: value.Lng,
      createdAt: value.createdAt,
      shippingCost: value.shippingCost,
      trackingId: value.trackingId,
      trackingItems: value.trackingItems,
    }));

    setOrders(orders);
  }, [data]);

  return { loading, error, orders };
}

export default useOrders;
