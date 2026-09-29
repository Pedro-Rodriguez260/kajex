"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingBag,
  Plus,
  Trash2,
  Printer,
  CheckCircle2,
  CreditCard,
  Banknote,
  RotateCcw,
  Sparkles,
} from "lucide-react";

interface ProductItem {
  id: string;
  name: string;
  price: number;
  category: string;
}

const sampleCatalog: ProductItem[] = [
  { id: "1", name: "Café Cappuccino 12oz", price: 6500, category: "Bebidas" },
  { id: "2", name: "Panini Jamón y Queso", price: 12000, category: "Comida" },
  { id: "3", name: "Jugo Natural de Lulo", price: 7000, category: "Bebidas" },
  { id: "4", name: "Postre Tres Leches", price: 8500, category: "Postres" },
  { id: "5", name: "Agua Manantial 500ml", price: 3000, category: "Bebidas" },
];

export function POSSimulator() {
  const [cart, setCart] = useState<{ item: ProductItem; qty: number }[]>([
    { item: sampleCatalog[0], qty: 2 },
    { item: sampleCatalog[1], qty: 1 },
  ]);

  const [paymentMethod, setPaymentMethod] = useState<"Efectivo" | "Nequi/Tarjeta">("Nequi/Tarjeta");
  const [ticketPrinted, setTicketPrinted] = useState(false);

  const addToCart = (product: ProductItem) => {
    setTicketPrinted(false);
    setCart((prev) => {
      const existing = prev.find((p) => p.item.id === product.id);
      if (existing) {
        return prev.map((p) =>
          p.item.id === product.id ? { ...p, qty: p.qty + 1 } : p
        );
      }
      return [...prev, { item: product, qty: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setTicketPrinted(false);
    setCart((prev) => prev.filter((p) => p.item.id !== id));
  };

  const total = cart.reduce((acc, curr) => acc + curr.item.price * curr.qty, 0);

  const handleCheckout = () => {
    if (cart.length === 0) return;
    setTicketPrinted(true);
  };

  const formatCOP = (amount: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="w-full bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 relative overflow-hidden shadow-xl shadow-blue-950/5">
      {/* Header bar of simulator */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
          <div className="w-3 h-3 rounded-full bg-amber-500" />
          <div className="w-3 h-3 rounded-full bg-emerald-500" />
          <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest ml-2">
            Simulador En Vivo: Kajex POS v4.2
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
            Modo Prueba Interactiva
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
        {/* Catalog Selection Column */}
        <div className="lg:col-span-6 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 text-blue-600" />
              1. Haz Clic para Agregar Productos
            </h4>
            <span className="text-xs text-slate-500 font-medium">Toca para probar</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {sampleCatalog.map((prod) => (
              <button
                key={prod.id}
                onClick={() => addToCart(prod)}
                className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 hover:bg-blue-50/80 border border-slate-200 hover:border-blue-400 text-left transition-all group shadow-sm"
              >
                <div>
                  <div className="text-xs font-bold text-slate-800 group-hover:text-blue-700">
                    {prod.name}
                  </div>
                  <div className="text-[11px] text-blue-600 font-extrabold mt-0.5">
                    {formatCOP(prod.price)}
                  </div>
                </div>
                <div className="p-1.5 rounded-lg bg-white border border-slate-200 group-hover:bg-blue-600 group-hover:border-blue-600 text-slate-600 group-hover:text-white transition-all shadow-xs">
                  <Plus className="w-3.5 h-3.5" />
                </div>
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-100">
            <h5 className="text-xs font-bold text-slate-700 mb-2">
              2. Método de Pago Simulado:
            </h5>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setPaymentMethod("Nequi/Tarjeta")}
                className={`flex items-center justify-center gap-2 p-3 rounded-xl border text-xs font-bold transition-all ${
                  paymentMethod === "Nequi/Tarjeta"
                    ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/20"
                    : "bg-slate-50 text-slate-600 border-slate-200 hover:text-slate-900"
                }`}
              >
                <CreditCard className="w-4 h-4" />
                Nequi / Tarjeta
              </button>

              <button
                onClick={() => setPaymentMethod("Efectivo")}
                className={`flex items-center justify-center gap-2 p-3 rounded-xl border text-xs font-bold transition-all ${
                  paymentMethod === "Efectivo"
                    ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/20"
                    : "bg-slate-50 text-slate-600 border-slate-200 hover:text-slate-900"
                }`}
              >
                <Banknote className="w-4 h-4" />
                Efectivo
              </button>
            </div>
          </div>
        </div>

        {/* Live Terminal & Ticket Print Column */}
        <div className="lg:col-span-6 flex flex-col justify-between bg-slate-50/90 rounded-2xl border border-slate-200/90 p-5 relative shadow-inner">
          <div>
            <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
              <span className="text-xs font-black text-slate-900">
                Ticket de Venta en Registro
              </span>
              <button
                onClick={() => {
                  setCart([]);
                  setTicketPrinted(false);
                }}
                className="text-[11px] text-slate-500 hover:text-red-600 flex items-center gap-1 transition-colors"
              >
                <RotateCcw className="w-3 h-3" />
                Limpiar
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="py-12 text-center text-xs text-slate-500 font-medium">
                Selecciona productos a la izquierda para armar la venta...
              </div>
            ) : (
              <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                {cart.map(({ item, qty }) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between text-xs py-2 px-3 rounded-lg bg-white border border-slate-200/80 shadow-xs"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-blue-600">
                        {qty}x
                      </span>
                      <span className="text-slate-800 font-medium">
                        {item.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-slate-900">
                        {formatCOP(item.price * qty)}
                      </span>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-slate-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="pt-4 mt-4 border-t border-slate-200">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-slate-600">TOTAL A COBRAR:</span>
              <span className="text-2xl font-black text-blue-600">
                {formatCOP(total)}
              </span>
            </div>

            <button
              disabled={cart.length === 0}
              onClick={handleCheckout}
              className="w-full py-3.5 rounded-xl font-extrabold text-xs text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 transition-all disabled:opacity-40 disabled:pointer-events-none"
            >
              <Printer className="w-4 h-4" />
              Facturar e Imprimir Tiquete Térmico
            </button>
          </div>

          {/* Animated Ticket Output */}
          <AnimatePresence>
            {ticketPrinted && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10 }}
                className="mt-4 p-4 rounded-xl bg-white border border-emerald-500 font-mono text-[11px] text-slate-800 shadow-xl space-y-2"
              >
                <div className="flex items-center justify-between text-emerald-700 font-bold border-b border-slate-100 pb-2">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    ¡VENTA PROCESADA EN 0.4s!
                  </span>
                  <span>#FACT-00849</span>
                </div>
                <div className="text-slate-500 text-[10px]">
                  KAJEX POS • Cliente: Mostrador • Pago: {paymentMethod}
                </div>
                <div className="flex items-center justify-between pt-1 font-bold text-slate-900">
                  <span>TOTAL PAGADO:</span>
                  <span className="text-emerald-600">{formatCOP(total)}</span>
                </div>
                <div className="text-[10px] text-slate-400 text-center pt-2">
                  Tiquete generado en impresora térmica 80mm
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
