/*
  # SmartFarms Database Schema

  Creates complete database schema for SmartFarms agricultural management system.

  ## New Tables

  ### 1. farmers
  Stores farmer/customer information
  - id (uuid, primary key)
  - name (text) - Farmer's full name
  - phone (text) - Contact number
  - location (text) - District/region
  - community (text) - Village/community name
  - land_size (text) - Size of farmland
  - crop (text) - Primary crop type
  - status (text) - Active/Inactive status
  - avatar (text) - Profile image URL
  - created_at (timestamptz)
  - updated_at (timestamptz)

  ### 2. products
  Agricultural products catalog
  - id (uuid, primary key)
  - name (text) - Product name
  - category (text) - Product category
  - sku (text) - Stock keeping unit code
  - price (numeric) - Product price in Leones
  - stock (integer) - Available quantity
  - status (text) - Active/Inactive status
  - description (text) - Product description
  - created_at (timestamptz)
  - updated_at (timestamptz)

  ### 3. transactions
  Sales and order transactions
  - id (uuid, primary key)
  - transaction_number (text) - Unique transaction identifier
  - farmer_id (uuid) - Foreign key to farmers
  - product_id (uuid) - Foreign key to products
  - amount (numeric) - Transaction amount
  - payment_status (text) - Completed/Pending/Failed
  - delivery_status (text) - Delivery tracking
  - transaction_date (timestamptz)
  - created_at (timestamptz)
  - updated_at (timestamptz)

  ### 4. revenue_stats
  Monthly revenue tracking
  - id (uuid, primary key)
  - month (text) - Month name
  - year (integer) - Year
  - income (numeric) - Total income
  - expenses (numeric) - Total expenses
  - created_at (timestamptz)

  ## Security
  - Enable RLS on all tables
  - Add policies for authenticated users
*/

CREATE TABLE IF NOT EXISTS farmers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  location text NOT NULL,
  community text NOT NULL,
  land_size text NOT NULL,
  crop text NOT NULL,
  status text DEFAULT 'Active',
  avatar text DEFAULT '',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  category text NOT NULL,
  sku text UNIQUE NOT NULL,
  price numeric NOT NULL DEFAULT 0,
  stock integer NOT NULL DEFAULT 0,
  status text DEFAULT 'Active',
  description text DEFAULT '',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS transactions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  transaction_number text UNIQUE NOT NULL,
  farmer_id uuid REFERENCES farmers(id) ON DELETE CASCADE,
  product_id uuid REFERENCES products(id) ON DELETE SET NULL,
  amount numeric NOT NULL DEFAULT 0,
  payment_status text DEFAULT 'Pending',
  delivery_status text DEFAULT 'Processing',
  transaction_date timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS revenue_stats (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  month text NOT NULL,
  year integer NOT NULL,
  income numeric DEFAULT 0,
  expenses numeric DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  UNIQUE(month, year)
);

CREATE INDEX IF NOT EXISTS idx_farmers_status ON farmers(status);
CREATE INDEX IF NOT EXISTS idx_farmers_location ON farmers(location);
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);
CREATE INDEX IF NOT EXISTS idx_products_status ON products(status);
CREATE INDEX IF NOT EXISTS idx_transactions_farmer_id ON transactions(farmer_id);
CREATE INDEX IF NOT EXISTS idx_transactions_product_id ON transactions(product_id);
CREATE INDEX IF NOT EXISTS idx_transactions_date ON transactions(transaction_date);
CREATE INDEX IF NOT EXISTS idx_transactions_payment_status ON transactions(payment_status);
CREATE INDEX IF NOT EXISTS idx_revenue_stats_year ON revenue_stats(year);

ALTER TABLE farmers ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE revenue_stats ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow all access to farmers"
  ON farmers FOR ALL
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow all access to products"
  ON products FOR ALL
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow all access to transactions"
  ON transactions FOR ALL
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow all access to revenue_stats"
  ON revenue_stats FOR ALL
  USING (true)
  WITH CHECK (true);