export { };

declare global {
  interface Window {
    $tw: any;
    TWIK_ID: string;
    twik_tags: LooseObject[];
    twik_user_data: Map;
    twik_generic_cart_customization: LooseObject;
  }
  interface LooseObject {
    [key: string]: any
  }
}