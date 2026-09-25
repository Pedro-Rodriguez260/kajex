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
    <div className="w-full glass-card rounded-3xl p-6 sm:p-8 border border-blue-500/30 relative overflow-hidden shadow-2xl shadow-blue-950/40">
      {/* Header bar of simulator */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
          <div className="w-3 h-3 rounded-full bg-amber-500" />
          <div className="w-3 h-3 rounded-full bg-emerald-500" />
          <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest ml-2">
            Simulador En Vivo: Kajex POS v4.2
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/30">
            Modo Prueba Interactiva
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
        {/* Catalog Selection Column */}
        <div className="lg:col-span-6 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-black text-white uppercase tracking-wider flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 text-blue-400" />
              1. Haz Clic para Agregar Productos
            </h4>
            <span className="text-xs text-slate-400">Toca para probar</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {sampleCatalog.map((prod) => (
              <button
                key={prod.id}
                onClick={() => addToCart(prod)}
                className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-900/80 hover:bg-blue-950/50 border border-slate-800 hover:border-blue-500/50 text-left transition-all group"
              >
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-blue-300">
                    {prod.name}
                  </div>
                  <div className="text-[11px] text-blue-400 font-extrabold mt-0.5">
                    {formatCOP(prod.price)}
                  </div>
                </div>
                <div className="p-1.5 rounded-lg bg-slate-800 group-hover:bg-blue-600 text-slate-300 group-hover:text-white transition-colors">
                  <Plus className="w-3.5 h-3.5" />
                </div>
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800/60">
            <h5 className="text-xs font-bold text-slate-300 mb-2">
              2. Método de Pago Simulado:
            </h5>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setPaymentMethod("Nequi/Tarjeta")}
                className={`flex items-center justify-center gap-2 p-3 rounded-xl border text-xs font-bold transition-all ${
                  paymentMethod === "Nequi/Tarjeta"
                    ? "bg-blue-600 text-white border-blue-500 shadow-md"
                    : "bg-slate-900 text-slate-400 border-slate-800 hover:text-white"
                }`}
              >
                <CreditCard className="w-4 h-4" />
                Nequi / Tarjeta
              </button>

              <button
                onClick={() => setPaymentMethod("Efectivo")}
                className={`flex items-center justify-center gap-2 p-3 rounded-xl border text-xs font-bold transition-all ${
                  paymentMethod === "Efectivo"
                    ? "bg-blue-600 text-white border-blue-500 shadow-md"
                    : "bg-slate-900 text-slate-400 border-slate-800 hover:text-white"
                }`}
              >
                <Banknote className="w-4 h-4" />
                Efectivo
              </button>
            </div>
          </div>
        </div>

        {/* Live Terminal & Ticket Print Column */}
        <div className="lg:col-span-6 flex flex-col justify-between bg-slate-950/90 rounded-2xl border border-slate-800 p-5 relative">
          <div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
              <span className="text-xs font-extrabold text-white">
                Ticket de Venta en Registro
              </span>
              <button
                onClick={() => {
                  setCart([]);
                  setTicketPrinted(false);
                }}
                className="text-[11px] text-slate-400 hover:text-red-400 flex items-center gap-1 transition-colors"
              >
                <RotateCcw className="w-3 h-3" />
                Limpiar
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="py-12 text-center text-xs text-slate-500">
                Selecciona productos a la izquierda para armar la venta...
              </div>
            ) : (
              <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                {cart.map(({ item, qty }) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between text-xs py-1.5 px-2.5 rounded-lg bg-slate-900/60"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-blue-400">
                        {qty}x
                      </span>
                      <span className="text-slate-200 font-medium">
                        {item.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-slate-300">
                        {formatCOP(item.price * qty)}
                      </span>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-slate-500 hover:text-red-400 transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="pt-4 mt-4 border-t border-slate-800">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-slate-400">TOTAL A COBRAR:</span>
              <span className="text-2xl font-black text-blue-400">
                {formatCOP(total)}
              </span>
            </div>

            <button
              disabled={cart.length === 0}
              onClick={handleCheckout}
              className="w-full py-3.5 rounded-xl font-extrabold text-xs text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 transition-all disabled:opacity-40 disabled:pointer-events-none"
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
                className="mt-4 p-4 rounded-xl bg-slate-900 border border-emerald-500/50 font-mono text-[11px] text-slate-200 shadow-xl space-y-2"
              >
                <div className="flex items-center justify-between text-emerald-400 font-bold border-b border-slate-800 pb-2">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    ¡VENTA PROCESADA EN 0.4s!
                  </span>
                  <span>#FACT-00849</span>
                </div>
                <div className="text-slate-400 text-[10px]">
                  KAJEX POS • Cliente: Mostrador • Pago: {paymentMethod}
                </div>
                <div className="flex items-center justify-between pt-1 font-bold text-white">
                  <span>TOTAL PAGADO:</span>
                  <span className="text-emerald-400">{formatCOP(total)}</span>
                </div>
                <div className="text-[10px] text-slate-500 text-center pt-2">
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
