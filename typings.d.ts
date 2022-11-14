type Customer = {
  email: string;
  name: string;
}

type CustomerResponse = {
  name: ID;
  value: Customer;
}

type TrackingItem = {
  customer_id: string;
  customer: Customer;
  items: Item[];
}

type Item = {
  customer_id: ID;
  name: string;
  price: number;
  quantity: number;
}

type Order = {
  Address: string;
  City: string;
  Lat: number;
  carrier: string;
  Lng: number;
  createdAt: string;
  shippingCost: number
  trackingId: string;
  trackingItems: TrackingItem;
}

type OrderResponse = {
  value: Order
}
