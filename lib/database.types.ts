export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      farmers: {
        Row: {
          id: string
          name: string
          phone: string
          location: string
          community: string
          land_size: string
          crop: string
          status: string
          avatar: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          phone: string
          location: string
          community: string
          land_size: string
          crop: string
          status?: string
          avatar?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          phone?: string
          location?: string
          community?: string
          land_size?: string
          crop?: string
          status?: string
          avatar?: string
          created_at?: string
          updated_at?: string
        }
      }
      products: {
        Row: {
          id: string
          name: string
          category: string
          sku: string
          price: number
          stock: number
          status: string
          description: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          category: string
          sku: string
          price?: number
          stock?: number
          status?: string
          description?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          category?: string
          sku?: string
          price?: number
          stock?: number
          status?: string
          description?: string
          created_at?: string
          updated_at?: string
        }
      }
      transactions: {
        Row: {
          id: string
          transaction_number: string
          farmer_id: string | null
          product_id: string | null
          amount: number
          payment_status: string
          delivery_status: string
          transaction_date: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          transaction_number: string
          farmer_id?: string | null
          product_id?: string | null
          amount?: number
          payment_status?: string
          delivery_status?: string
          transaction_date?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          transaction_number?: string
          farmer_id?: string | null
          product_id?: string | null
          amount?: number
          payment_status?: string
          delivery_status?: string
          transaction_date?: string
          created_at?: string
          updated_at?: string
        }
      }
      revenue_stats: {
        Row: {
          id: string
          month: string
          year: number
          income: number
          expenses: number
          created_at: string
        }
        Insert: {
          id?: string
          month: string
          year: number
          income?: number
          expenses?: number
          created_at?: string
        }
        Update: {
          id?: string
          month?: string
          year?: number
          income?: number
          expenses?: number
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
