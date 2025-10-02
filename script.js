// Warehouse Management System JavaScript

// Global variables
let inventory = [];
let orders = [];
let batches = [];
let currentOrderId = 1;
let currentBatchId = 1;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    loadSampleData();
    setupEventListeners();
    updateInventoryDisplay();
    updateOrdersDisplay();
});

// Initialize application
function initializeApp() {
    // Load data from localStorage if available
    const savedInventory = localStorage.getItem('warehouse_inventory');
    const savedOrders = localStorage.getItem('warehouse_orders');
    const savedBatches = localStorage.getItem('warehouse_batches');
    const savedOrderId = localStorage.getItem('current_order_id');
    const savedBatchId = localStorage.getItem('current_batch_id');
    
    if (savedInventory) {
        inventory = JSON.parse(savedInventory);
    }
    
    if (savedOrders) {
        orders = JSON.parse(savedOrders);
    }
    
    if (savedBatches) {
        batches = JSON.parse(savedBatches);
    }
    
    if (savedOrderId) {
        currentOrderId = parseInt(savedOrderId);
    }
    
    if (savedBatchId) {
        currentBatchId = parseInt(savedBatchId);
    }
}

// Load sample data for demonstration
function loadSampleData() {
    if (inventory.length === 0) {
        inventory = [
            {
                code: 'G001',
                name: 'Gạch men 30x30 Viglacera',
                category: 'Gạch men',
                unit: 'Viên',
                size: '30x30cm',
                color: 'Trắng',
                importPrice: 45000,
                referencePrice: 55000,
                stock: 500,
                supplier: 'Viglacera'
            },
            {
                code: 'G002',
                name: 'Gạch granite 60x60 Đồng Tâm',
                category: 'Gạch granite',
                unit: 'Viên',
                size: '60x60cm',
                color: 'Xám đá',
                importPrice: 120000,
                referencePrice: 150000,
                stock: 200,
                supplier: 'Đồng Tâm'
            },
            {
                code: 'G003',
                name: 'Gạch ốp tường 25x40 Prime',
                category: 'Gạch ốp tường',
                unit: 'Viên',
                size: '25x40cm',
                color: 'Kem',
                importPrice: 35000,
                referencePrice: 45000,
                stock: 800,
                supplier: 'Prime Group'
            },
            {
                code: 'G004',
                name: 'Gạch lát nền 80x80 Mikado',
                category: 'Gạch lát nền',
                unit: 'Viên',
                size: '80x80cm',
                color: 'Vân gỗ',
                importPrice: 180000,
                referencePrice: 220000,
                stock: 150,
                supplier: 'Mikado'
            },
            {
                code: 'G005',
                name: 'Gạch mosaic thủy tinh',
                category: 'Gạch mosaic',
                unit: 'Tấm',
                size: '30x30cm',
                color: 'Xanh biển',
                importPrice: 250000,
                referencePrice: 320000,
                stock: 50,
                supplier: 'Mosaic Việt'
            },
            {
                code: 'G006',
                name: 'Gạch terrazzo 40x40',
                category: 'Gạch terrazzo',
                unit: 'Viên',
                size: '40x40cm',
                color: 'Đỏ gạch',
                importPrice: 65000,
                referencePrice: 85000,
                stock: 300,
                supplier: 'Terrazzo Hà Nội'
            },
            {
                code: 'G007',
                name: 'Gạch ceramic 20x20 Saigon',
                category: 'Gạch ceramic',
                unit: 'Viên',
                size: '20x20cm',
                color: 'Vàng kem',
                importPrice: 25000,
                referencePrice: 35000,
                stock: 1000,
                supplier: 'Saigon Ceramic'
            },
            {
                code: 'G008',
                name: 'Gạch porcelain 120x60 Luxury',
                category: 'Gạch porcelain',
                unit: 'Viên',
                size: '120x60cm',
                color: 'Marble trắng',
                importPrice: 350000,
                referencePrice: 450000,
                stock: 80,
                supplier: 'Luxury Tiles'
            }
        ];
        saveInventoryToStorage();
    }
    
    // Load sample orders if none exist
    if (orders.length === 0) {
        orders = [
            {
                id: 'DH0001',
                customerName: 'Công ty TNHH Xây Dựng ABC',
                customerPhone: '0901234567',
                customerAddress: '123 Đường Lê Lợi, Quận 1, TP.HCM',
                date: new Date('2024-09-15').toISOString(),
                status: 'completed',
                items: [
                    {
                        productCode: 'G001',
                        productName: 'Gạch men 30x30 Viglacera',
                        quantity: 100,
                        price: 52000,
                        total: 5200000
                    },
                    {
                        productCode: 'G003',
                        productName: 'Gạch ốp tường 25x40 Prime',
                        quantity: 50,
                        price: 42000,
                        total: 2100000
                    }
                ],
                total: 7300000
            },
            {
                id: 'DH0002',
                customerName: 'Anh Nguyễn Văn Minh',
                customerPhone: '0987654321',
                customerAddress: '456 Đường Nguyễn Huệ, Quận 3, TP.HCM',
                date: new Date('2024-09-20').toISOString(),
                status: 'completed',
                items: [
                    {
                        productCode: 'G002',
                        productName: 'Gạch granite 60x60 Đồng Tâm',
                        quantity: 80,
                        price: 145000,
                        total: 11600000
                    }
                ],
                total: 11600000
            },
            {
                id: 'DH0003',
                customerName: 'Chị Trần Thị Lan',
                customerPhone: '0912345678',
                customerAddress: '789 Đường Võ Văn Tần, Quận 10, TP.HCM',
                date: new Date('2024-09-25').toISOString(),
                status: 'exported',
                items: [
                    {
                        productCode: 'G004',
                        productName: 'Gạch lát nền 80x80 Mikado',
                        quantity: 60,
                        price: 210000,
                        total: 12600000
                    },
                    {
                        productCode: 'G007',
                        productName: 'Gạch ceramic 20x20 Saigon',
                        quantity: 200,
                        price: 32000,
                        total: 6400000
                    }
                ],
                total: 19000000
            }
        ];
        currentOrderId = 4;
        saveOrdersToStorage();
        saveCurrentOrderIdToStorage();
    }
    
    // Load sample batches if none exist
    if (batches.length === 0) {
        batches = [
            {
                id: 'LOT001',
                importDate: '2024-09-01',
                supplier: 'Viglacera',
                status: 'active',
                products: [
                    {
                        productCode: 'G001',
                        productName: 'Gạch men 30x30 Viglacera',
                        quantity: 300,
                        used: 0,
                        remaining: 300
                    },
                    {
                        productCode: 'G002',
                        productName: 'Gạch granite 60x60 Đồng Tâm',
                        quantity: 200,
                        used: 0,
                        remaining: 200
                    },
                    {
                        productCode: 'G003',
                        productName: 'Gạch ốp tường 25x40 Prime',
                        quantity: 500,
                        used: 0,
                        remaining: 500
                    }
                ]
            },
            {
                id: 'LOT002',
                importDate: '2024-08-15',
                supplier: 'Viglacera',
                status: 'active',
                products: [
                    {
                        productCode: 'G001',
                        productName: 'Gạch men 30x30 Viglacera',
                        quantity: 200,
                        used: 100,
                        remaining: 100
                    },
                    {
                        productCode: 'G004',
                        productName: 'Gạch lát nền 80x80 Mikado',
                        quantity: 150,
                        used: 0,
                        remaining: 150
                    }
                ]
            },
            {
                id: 'LOT003',
                importDate: '2024-09-10',
                supplier: 'Đồng Tâm',
                status: 'active',
                products: [
                    {
                        productCode: 'G005',
                        productName: 'Gạch mosaic thủy tinh',
                        quantity: 50,
                        used: 0,
                        remaining: 50
                    },
                    {
                        productCode: 'G006',
                        productName: 'Gạch terrazzo 40x40',
                        quantity: 300,
                        used: 50,
                        remaining: 250
                    },
                    {
                        productCode: 'G007',
                        productName: 'Gạch ceramic 20x20 Saigon',
                        quantity: 1000,
                        used: 200,
                        remaining: 800
                    }
                ]
            },
            {
                id: 'LOT004',
                importDate: '2024-09-20',
                supplier: 'Prime Group',
                status: 'active',
                products: [
                    {
                        productCode: 'G003',
                        productName: 'Gạch ốp tường 25x40 Prime',
                        quantity: 300,
                        used: 0,
                        remaining: 300
                    },
                    {
                        productCode: 'G008',
                        productName: 'Gạch porcelain 120x60 Luxury',
                        quantity: 80,
                        used: 0,
                        remaining: 80
                    }
                ]
            },
            {
                id: 'LOT005',
                importDate: '2024-08-25',
                supplier: 'Mikado',
                status: 'active',
                products: [
                    {
                        productCode: 'G004',
                        productName: 'Gạch lát nền 80x80 Mikado',
                        quantity: 100,
                        used: 0,
                        remaining: 100
                    },
                    {
                        productCode: 'G006',
                        productName: 'Gạch terrazzo 40x40',
                        quantity: 200,
                        used: 0,
                        remaining: 200
                    }
                ]
            }
        ];
        currentBatchId = 6;
        saveBatchesToStorage();
        saveCurrentBatchIdToStorage();
    }
}

// Setup event listeners
function setupEventListeners() {
    // Navigation
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const page = this.getAttribute('data-page');
            showPage(page);
        });
    });
    
    // Search functionality
    document.getElementById('search-inventory').addEventListener('input', function() {
        filterInventory(this.value);
    });
    
    // Column filters
    setupColumnFilters();
    
    // Export buttons
    document.getElementById('export-inventory-btn').addEventListener('click', exportInventoryData);
    document.getElementById('export-orders-btn').addEventListener('click', exportOrdersData);
    document.getElementById('export-batches-btn').addEventListener('click', exportBatchesData);
    document.getElementById('export-summary-btn').addEventListener('click', exportSummaryData);
    
    // Import form
    document.getElementById('import-form').addEventListener('submit', handleImportProduct);
    
    // Batch form
    document.getElementById('batch-form').addEventListener('submit', handleCreateBatch);
    document.getElementById('new-batch-btn').addEventListener('click', showBatchForm);
    document.getElementById('cancel-batch-btn').addEventListener('click', hideBatchForm);
    
    // Order form
    document.getElementById('order-form').addEventListener('submit', handleCreateOrder);
    document.getElementById('new-order-btn').addEventListener('click', showOrderForm);
    document.getElementById('cancel-order-btn').addEventListener('click', hideOrderForm);
    document.getElementById('add-item-btn').addEventListener('click', addOrderItem);
    
    // Modal
    document.getElementById('order-detail-modal').addEventListener('click', function(e) {
        if (e.target === this || e.target.classList.contains('close') || e.target.classList.contains('close-modal')) {
            hideModal();
        }
    });
    
    document.getElementById('export-order-full-btn').addEventListener('click', () => handleExportOrder(true));
    document.getElementById('export-order-simple-btn').addEventListener('click', () => handleExportOrder(false));
    
    // Product batch modal
    document.getElementById('product-batch-modal').addEventListener('click', function(e) {
        if (e.target === this || e.target.classList.contains('close') || e.target.classList.contains('close-modal')) {
            hideProductBatchModal();
        }
    });
    
    // Batch detail modal
    document.getElementById('batch-detail-modal').addEventListener('click', function(e) {
        if (e.target === this || e.target.classList.contains('close') || e.target.classList.contains('close-modal')) {
            hideBatchDetailModal();
        }
    });
    
    // Edit batch modal
    document.getElementById('edit-batch-modal').addEventListener('click', function(e) {
        if (e.target === this || e.target.classList.contains('close') || e.target.classList.contains('close-modal')) {
            hideEditBatchModal();
        }
    });
    
    // Save batch button
    document.getElementById('save-batch-btn').addEventListener('click', saveBatchChanges);
}

// Page navigation
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Remove active class from all nav buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected page
    document.getElementById(pageId + '-page').classList.add('active');
    
    // Add active class to selected nav button
    document.querySelector(`[data-page="${pageId}"]`).classList.add('active');
    
    // Update displays based on page
    if (pageId === 'inventory') {
        updateInventoryDisplay();
    } else if (pageId === 'orders') {
        updateOrdersDisplay();
        updateProductSelects();
    } else if (pageId === 'batches') {
        updateBatchesDisplay();
        updateBatchProductSelects();
    } else if (pageId === 'reports') {
        updateReportsDisplay();
    }
}

// Inventory functions
function updateInventoryDisplay() {
    const tbody = document.getElementById('inventory-tbody');
    tbody.innerHTML = '';
    
    inventory.forEach(product => {
        const row = createInventoryRow(product);
        tbody.appendChild(row);
    });
}

function createInventoryRow(product) {
    const row = document.createElement('tr');
    
    const statusClass = getStockStatus(product.stock);
    const statusText = getStockStatusText(product.stock);
    
        row.innerHTML = `
        <td><strong>${product.code}</strong></td>
        <td>${product.name}</td>
        <td>${product.category}</td>
        <td>${product.size || 'N/A'}</td>
        <td>${product.color || 'N/A'}</td>
        <td>${product.unit}</td>
        <td>${formatCurrency(product.importPrice)}</td>
        <td>${formatCurrency(product.referencePrice || product.sellPrice)}</td>
        <td><strong>${product.stock}</strong></td>
        <td><span class="status-badge ${statusClass}">${statusText}</span></td>
        <td>
            <button class="btn btn-info btn-small" onclick="showProductBatchDetails('${product.code}')">
                <i class="fas fa-eye"></i> Xem
            </button>
        </td>
    `;
    
    return row;
}

function getStockStatus(stock) {
    if (stock === 0) return 'status-out-of-stock';
    if (stock <= 10) return 'status-low-stock';
    return 'status-in-stock';
}

function getStockStatusText(stock) {
    if (stock === 0) return 'Hết hàng';
    if (stock <= 10) return 'Sắp hết';
    return 'Còn hàng';
}

function filterInventory(searchTerm) {
    const tbody = document.getElementById('inventory-tbody');
    const rows = tbody.querySelectorAll('tr');
    
    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        const isVisible = text.includes(searchTerm.toLowerCase());
        row.style.display = isVisible ? '' : 'none';
    });
}

// Setup column filters
function setupColumnFilters() {
    // Inventory table filters
    const inventoryFilters = document.querySelectorAll('#inventory-table .filter-input, #inventory-table .filter-select');
    inventoryFilters.forEach(filter => {
        filter.addEventListener('input', function() {
            filterTable('inventory-table');
        });
        filter.addEventListener('change', function() {
            filterTable('inventory-table');
        });
    });
    
    // Orders table filters
    const orderFilters = document.querySelectorAll('#orders-table .filter-input, #orders-table .filter-select');
    orderFilters.forEach(filter => {
        filter.addEventListener('input', function() {
            filterTable('orders-table');
        });
        filter.addEventListener('change', function() {
            filterTable('orders-table');
        });
    });
}

function filterTable(tableId) {
    const table = document.getElementById(tableId);
    const tbody = table.querySelector('tbody');
    const rows = tbody.querySelectorAll('tr');
    const filters = table.querySelectorAll('.filter-input, .filter-select');
    
    rows.forEach(row => {
        let isVisible = true;
        const cells = row.querySelectorAll('td');
        
        filters.forEach(filter => {
            const columnIndex = parseInt(filter.dataset.column);
            const filterValue = filter.value.toLowerCase().trim();
            
            if (filterValue && cells[columnIndex]) {
                const cellText = cells[columnIndex].textContent.toLowerCase().trim();
                
                if (filter.type === 'number') {
                    const cellNumber = parseFloat(cellText.replace(/[^\d.-]/g, ''));
                    const filterNumber = parseFloat(filterValue);
                    if (!isNaN(filterNumber) && !isNaN(cellNumber)) {
                        if (cellNumber < filterNumber) {
                            isVisible = false;
                        }
                    }
                } else if (filter.type === 'date') {
                    const cellDate = new Date(cells[columnIndex].textContent);
                    const filterDate = new Date(filterValue);
                    if (!isNaN(filterDate.getTime()) && !isNaN(cellDate.getTime())) {
                        if (cellDate.toDateString() !== filterDate.toDateString()) {
                            isVisible = false;
                        }
                    }
                } else {
                    if (!cellText.includes(filterValue)) {
                        isVisible = false;
                    }
                }
            }
        });
        
        row.style.display = isVisible ? '' : 'none';
    });
}

// Import product functions
function handleImportProduct(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const productData = {
        code: document.getElementById('product-code').value,
        name: document.getElementById('product-name').value,
        category: document.getElementById('product-category').value,
        unit: document.getElementById('product-unit').value,
        size: document.getElementById('product-size').value,
        color: document.getElementById('product-color').value,
        importPrice: parseInt(document.getElementById('import-price').value),
        referencePrice: parseInt(document.getElementById('sell-price').value),
        stock: parseInt(document.getElementById('import-quantity').value),
        supplier: document.getElementById('supplier').value
    };
    
    // Create new batch for this import
    const batchId = generateBatchId();
    const newBatch = {
        id: batchId,
        importDate: new Date().toISOString().split('T')[0],
        supplier: productData.supplier,
        status: 'active',
        products: [{
            productCode: productData.code,
            productName: productData.name,
            quantity: productData.stock,
            used: 0,
            remaining: productData.stock
        }]
    };
    
    // Check if product already exists
    const existingProductIndex = inventory.findIndex(p => p.code === productData.code);
    
    if (existingProductIndex !== -1) {
        // Update existing product stock
        inventory[existingProductIndex].stock += productData.stock;
        
        // Add to existing batch or create new one
        const existingBatch = batches.find(b => b.supplier === productData.supplier && b.importDate === newBatch.importDate);
        if (existingBatch) {
            // Add to existing batch
            existingBatch.products.push(newBatch.products[0]);
        } else {
            // Create new batch
            batches.push(newBatch);
            currentBatchId++;
        }
        
        showToast('Đã cập nhật sản phẩm và tạo lô hàng!', 'success');
    } else {
        // Add new product
        inventory.push(productData);
        batches.push(newBatch);
        currentBatchId++;
        showToast('Đã thêm sản phẩm mới và tạo lô hàng!', 'success');
    }
    
    saveInventoryToStorage();
    saveBatchesToStorage();
    saveCurrentBatchIdToStorage();
    updateInventoryDisplay();
    updateBatchesDisplay();
    e.target.reset();
}

// Order functions
function showOrderForm() {
    document.getElementById('order-form-container').style.display = 'block';
    document.getElementById('order-id').value = generateOrderId();
    updateProductSelects();
}

function hideOrderForm() {
    document.getElementById('order-form-container').style.display = 'none';
    document.getElementById('order-form').reset();
    
    // Reset to single order item
    const orderItems = document.querySelector('.order-items');
    orderItems.innerHTML = createOrderItemHTML();
    updateProductSelects();
    updateGrandTotal();
}

function generateOrderId() {
    return `DH${String(currentOrderId).padStart(4, '0')}`;
}

function addOrderItem() {
    const orderItems = document.querySelector('.order-items');
    const newItem = document.createElement('div');
    newItem.className = 'order-item';
    newItem.innerHTML = createOrderItemHTML();
    orderItems.appendChild(newItem);
    
    updateProductSelects();
    setupOrderItemListeners(newItem);
}

function createOrderItemHTML() {
    return `
        <div class="form-row">
            <div class="form-group">
                <label>Mã Sản Phẩm:</label>
                <select class="product-select" required>
                    <option value="">Chọn sản phẩm</option>
                </select>
            </div>
            <div class="form-group">
                <label>Số Lượng:</label>
                <input type="number" class="quantity-input" min="1" required>
            </div>
            <div class="form-group">
                <label>Đơn Giá:</label>
                <input type="number" class="price-input" readonly>
            </div>
            <div class="form-group">
                <label>Thành Tiền:</label>
                <input type="number" class="total-input" readonly>
            </div>
            <button type="button" class="btn btn-danger btn-small remove-item">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `;
}

function updateProductSelects() {
    const selects = document.querySelectorAll('.product-select');
    
    selects.forEach(select => {
        const currentValue = select.value;
        select.innerHTML = '<option value="">Chọn sản phẩm</option>';
        
        inventory.forEach(product => {
            if (product.stock > 0) {
                const option = document.createElement('option');
                option.value = product.code;
                option.textContent = `${product.code} - ${product.name} (Còn: ${product.stock})`;
                option.dataset.price = product.referencePrice || product.sellPrice;
                option.dataset.stock = product.stock;
                select.appendChild(option);
            }
        });
        
        select.value = currentValue;
        setupOrderItemListeners(select.closest('.order-item'));
    });
}

function setupOrderItemListeners(orderItem) {
    if (!orderItem) return;
    
    const productSelect = orderItem.querySelector('.product-select');
    const quantityInput = orderItem.querySelector('.quantity-input');
    const priceInput = orderItem.querySelector('.price-input');
    const totalInput = orderItem.querySelector('.total-input');
    const removeBtn = orderItem.querySelector('.remove-item');
    
    if (!productSelect || !quantityInput || !priceInput || !totalInput || !removeBtn) {
        return;
    }
    
    productSelect.addEventListener('change', function() {
        const selectedOption = this.options[this.selectedIndex];
        if (selectedOption.value) {
            // Chỉ set placeholder cho giá tham chiếu, không tự động điền
            priceInput.placeholder = `Giá tham chiếu: ${formatCurrency(selectedOption.dataset.price)}`;
            quantityInput.max = selectedOption.dataset.stock;
            quantityInput.value = 1;
            // Clear previous values
            priceInput.value = '';
            totalInput.value = '';
        } else {
            priceInput.placeholder = 'Nhập giá bán...';
            priceInput.value = '';
            totalInput.value = '';
            quantityInput.max = '';
        }
    });
    
    quantityInput.addEventListener('input', function() {
        updateItemTotal(orderItem);
    });
    
    priceInput.addEventListener('input', function() {
        updateItemTotal(orderItem);
    });
    
    removeBtn.addEventListener('click', function() {
        if (document.querySelectorAll('.order-item').length > 1) {
            orderItem.remove();
            updateGrandTotal();
        } else {
            showToast('Phải có ít nhất một sản phẩm trong đơn hàng!', 'warning');
        }
    });
}

function updateItemTotal(orderItem) {
    const quantity = parseInt(orderItem.querySelector('.quantity-input').value) || 0;
    const price = parseInt(orderItem.querySelector('.price-input').value) || 0;
    const total = quantity * price;
    
    orderItem.querySelector('.total-input').value = total;
    updateGrandTotal();
}

function updateGrandTotal() {
    const totalInputs = document.querySelectorAll('.total-input');
    let grandTotal = 0;
    
    totalInputs.forEach(input => {
        grandTotal += parseInt(input.value) || 0;
    });
    
    document.getElementById('grand-total').textContent = formatCurrency(grandTotal);
}

function handleCreateOrder(e) {
    e.preventDefault();
    
    const orderData = {
        id: document.getElementById('order-id').value,
        customerName: document.getElementById('customer-name').value,
        customerPhone: document.getElementById('customer-phone').value,
        customerAddress: document.getElementById('customer-address').value,
        date: new Date().toISOString(),
        status: 'pending',
        items: [],
        total: 0
    };
    
    // Collect order items
    const orderItems = document.querySelectorAll('.order-item');
    let isValid = true;
    
    orderItems.forEach(item => {
        const productCode = item.querySelector('.product-select').value;
        const quantity = parseInt(item.querySelector('.quantity-input').value);
        const price = parseInt(item.querySelector('.price-input').value);
        const total = parseInt(item.querySelector('.total-input').value);
        
        if (productCode && quantity && price) {
            const product = inventory.find(p => p.code === productCode);
            if (product && quantity <= product.stock) {
                orderData.items.push({
                    productCode,
                    productName: product.name,
                    quantity,
                    price,
                    total
                });
                orderData.total += total;
            } else {
                showToast(`Không đủ hàng cho sản phẩm ${productCode}!`, 'error');
                isValid = false;
            }
        }
    });
    
    if (isValid && orderData.items.length > 0) {
        orders.push(orderData);
        currentOrderId++;
        
        saveOrdersToStorage();
        saveCurrentOrderIdToStorage();
        
        showToast('Đã tạo đơn hàng thành công!', 'success');
        hideOrderForm();
        updateOrdersDisplay();
    }
}

function updateOrdersDisplay() {
    const tbody = document.getElementById('orders-tbody');
    tbody.innerHTML = '';
    
    orders.forEach(order => {
        const row = createOrderRow(order);
        tbody.appendChild(row);
    });
}

function createOrderRow(order) {
    const row = document.createElement('tr');
    
    const statusClass = `status-${order.status}`;
    const statusText = getOrderStatusText(order.status);
    const date = new Date(order.date).toLocaleDateString('vi-VN');
    
    row.innerHTML = `
        <td><strong>${order.id}</strong></td>
        <td>${order.customerName}</td>
        <td>${date}</td>
        <td>${formatCurrency(order.total)}</td>
        <td>
            <select class="status-select" onchange="changeOrderStatus('${order.id}', this.value)" style="padding: 4px 8px; border-radius: 4px; border: 1px solid #ddd; min-width: 120px;">
                <option value="pending" ${order.status === 'pending' ? 'selected' : ''}>Chờ xử lý</option>
                <option value="completed" ${order.status === 'completed' ? 'selected' : ''}>Đã hoàn thành</option>
                <option value="exported" ${order.status === 'exported' ? 'selected' : ''}>Đã xuất phiếu</option>
                <option value="cancelled" ${order.status === 'cancelled' ? 'selected' : ''}>Đã hủy</option>
            </select>
        </td>
        <td>
            <button class="btn btn-primary btn-small" onclick="showOrderDetail('${order.id}')">
                <i class="fas fa-eye"></i> Xem
            </button>
        </td>
    `;
    
    return row;
}

function getOrderStatusText(status) {
    const statusMap = {
        'pending': 'Chờ xử lý',
        'completed': 'Đã hoàn thành',
        'exported': 'Đã xuất phiếu',
        'cancelled': 'Đã hủy'
    };
    return statusMap[status] || status;
}

function changeOrderStatus(orderId, newStatus) {
    const order = orders.find(o => o.id === orderId);
    if (!order) return;
    
    const oldStatus = order.status;
    order.status = newStatus;
    
    // Save changes
    saveOrdersToStorage();
    updateOrdersDisplay();
    
    // Show notification
    const statusText = getOrderStatusText(newStatus);
    showToast(`Đã thay đổi trạng thái đơn hàng ${orderId} thành "${statusText}"`, 'success');
}

function showOrderDetail(orderId) {
    const order = orders.find(o => o.id === orderId);
    if (!order) return;
    
    const modal = document.getElementById('order-detail-modal');
    const content = document.getElementById('order-detail-content');
    
    content.innerHTML = createOrderDetailHTML(order);
    modal.style.display = 'block';
    
    // Store current order for export
    modal.dataset.orderId = orderId;
}

function createOrderDetailHTML(order) {
    const date = new Date(order.date).toLocaleDateString('vi-VN');
    
    return `
        <div class="order-detail">
            <h4>Thông Tin Đơn Hàng</h4>
            <div class="order-info">
                <div class="info-item">
                    <label>Mã Đơn Hàng:</label>
                    <span>${order.id}</span>
                </div>
                <div class="info-item">
                    <label>Ngày Tạo:</label>
                    <span>${date}</span>
                </div>
                <div class="info-item">
                    <label>Khách Hàng:</label>
                    <span>${order.customerName}</span>
                </div>
                <div class="info-item">
                    <label>Số Điện Thoại:</label>
                    <span>${order.customerPhone}</span>
                </div>
                <div class="info-item">
                    <label>Địa Chỉ:</label>
                    <span>${order.customerAddress}</span>
                </div>
                <div class="info-item">
                    <label>Trạng Thái:</label>
                    <span class="status-badge status-${order.status}">${getOrderStatusText(order.status)}</span>
                </div>
            </div>
        </div>
        
        <div class="order-items-detail">
            <table>
                <thead>
                    <tr>
                        <th>Mã SP</th>
                        <th>Tên Sản Phẩm</th>
                        <th>Số Lượng</th>
                        <th>Đơn Giá</th>
                        <th>Thành Tiền</th>
                    </tr>
                </thead>
                <tbody>
                    ${order.items.map(item => `
                        <tr>
                            <td>${item.productCode}</td>
                            <td>${item.productName}</td>
                            <td>${item.quantity}</td>
                            <td>${formatCurrency(item.price)}</td>
                            <td>${formatCurrency(item.total)}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
            <div class="order-total">
                Tổng Tiền: ${formatCurrency(order.total)}
            </div>
        </div>
    `;
}

function hideModal() {
    document.getElementById('order-detail-modal').style.display = 'none';
}

function handleExportOrder() {
    const modal = document.getElementById('order-detail-modal');
    const orderId = modal.dataset.orderId;
    const order = orders.find(o => o.id === orderId);
    
    if (!order || order.status !== 'pending') {
        showToast('Không thể xuất đơn hàng này!', 'error');
        return;
    }
    
    // Update inventory
    let canExport = true;
    const updates = [];
    
    order.items.forEach(item => {
        const product = inventory.find(p => p.code === item.productCode);
        if (product && product.stock >= item.quantity) {
            updates.push({
                product: product,
                quantity: item.quantity
            });
        } else {
            canExport = false;
            showToast(`Không đủ hàng cho sản phẩm ${item.productCode}!`, 'error');
        }
    });
    
    if (canExport) {
        // Apply inventory updates
        updates.forEach(update => {
            update.product.stock -= update.quantity;
        });
        
        // Update order status
        order.status = 'completed';
        
        // Save changes
        saveInventoryToStorage();
        saveOrdersToStorage();
        
        // Generate and print receipt
        generateReceipt(order);
        
        // Update displays
        updateInventoryDisplay();
        updateOrdersDisplay();
        
        showToast('Đã xuất đơn hàng và cập nhật kho thành công!', 'success');
        hideModal();
    }
}

function generateReceipt(order) {
    const receiptWindow = window.open('', '_blank');
    const date = new Date(order.date).toLocaleDateString('vi-VN');
    
    const receiptHTML = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Phiếu Đơn Hàng - ${order.id}</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 20px; }
                .header { text-align: center; margin-bottom: 30px; }
                .company-name { font-size: 24px; font-weight: bold; color: #2c3e50; }
                .receipt-title { font-size: 20px; margin: 10px 0; }
                .order-info { margin: 20px 0; }
                .order-info div { margin: 5px 0; }
                table { width: 100%; border-collapse: collapse; margin: 20px 0; }
                th, td { border: 1px solid #ddd; padding: 10px; text-align: left; }
                th { background-color: #f2f2f2; }
                .total { text-align: right; font-size: 18px; font-weight: bold; margin: 20px 0; }
                .footer { margin-top: 40px; text-align: center; }
                @media print {
                    body { margin: 0; }
                }
            </style>
        </head>
        <body>
            <div class="header">
                <div class="company-name">HỆ THỐNG QUẢN LÝ XUẤT NHẬP KHO</div>
                <div class="receipt-title">PHIẾU ĐỚN HÀNG</div>
                <div>Mã đơn: ${order.id}</div>
            </div>
            
            <div class="order-info">
                <div><strong>Ngày tạo:</strong> ${date}</div>
                <div><strong>Khách hàng:</strong> ${order.customerName}</div>
                <div><strong>Số điện thoại:</strong> ${order.customerPhone}</div>
                <div><strong>Địa chỉ:</strong> ${order.customerAddress}</div>
            </div>
            
            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Mã SP</th>
                        <th>Tên Sản Phẩm</th>
                        <th>Số Lượng</th>
                        <th>Đơn Giá</th>
                        <th>Thành Tiền</th>
                    </tr>
                </thead>
                <tbody>
                    ${order.items.map((item, index) => `
                        <tr>
                            <td>${index + 1}</td>
                            <td>${item.productCode}</td>
                            <td>${item.productName}</td>
                            <td>${item.quantity}</td>
                            <td>${formatCurrency(item.price)}</td>
                            <td>${formatCurrency(item.total)}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
            
            <div class="total">
                <strong>TỔNG TIỀN: ${formatCurrency(order.total)}</strong>
            </div>
            
            <div class="footer">
                <p>Cảm ơn quý khách đã sử dụng dịch vụ!</p>
                <p>Ngày in: ${new Date().toLocaleDateString('vi-VN')}</p>
            </div>
        </body>
        </html>
    `;
    
    receiptWindow.document.write(receiptHTML);
    receiptWindow.document.close();
    receiptWindow.print();
}

function cancelOrder(orderId) {
    if (confirm('Bạn có chắc chắn muốn hủy đơn hàng này?')) {
        const order = orders.find(o => o.id === orderId);
        if (order) {
            order.status = 'cancelled';
            saveOrdersToStorage();
            updateOrdersDisplay();
            showToast('Đã hủy đơn hàng!', 'success');
        }
    }
}

// Utility functions
function formatCurrency(amount) {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(amount);
}

function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const icon = getToastIcon(type);
    toast.innerHTML = `
        <i class="${icon}"></i>
        <span>${message}</span>
    `;
    
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 5000);
}

function getToastIcon(type) {
    const icons = {
        'success': 'fas fa-check-circle',
        'error': 'fas fa-exclamation-circle',
        'warning': 'fas fa-exclamation-triangle',
        'info': 'fas fa-info-circle'
    };
    return icons[type] || icons.info;
}

// Storage functions
function saveInventoryToStorage() {
    localStorage.setItem('warehouse_inventory', JSON.stringify(inventory));
}

function saveOrdersToStorage() {
    localStorage.setItem('warehouse_orders', JSON.stringify(orders));
}

function saveCurrentOrderIdToStorage() {
    localStorage.setItem('current_order_id', currentOrderId.toString());
}

function saveBatchesToStorage() {
    localStorage.setItem('warehouse_batches', JSON.stringify(batches));
}

function saveCurrentBatchIdToStorage() {
    localStorage.setItem('current_batch_id', currentBatchId.toString());
}

// Initialize order item listeners on page load
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        const orderItems = document.querySelectorAll('.order-item');
        orderItems.forEach(item => {
            if (item) {
                setupOrderItemListeners(item);
            }
        });
    }, 100);
});

// Batch management functions
function showBatchForm() {
    document.getElementById('batch-form-container').style.display = 'block';
    document.getElementById('batch-code').value = generateBatchId();
    updateBatchProductSelects();
}

function hideBatchForm() {
    document.getElementById('batch-form-container').style.display = 'none';
    document.getElementById('batch-form').reset();
}

function generateBatchId() {
    return `LOT${String(currentBatchId).padStart(3, '0')}`;
}

function updateBatchProductSelects() {
    const select = document.getElementById('batch-product');
    select.innerHTML = '<option value="">Chọn sản phẩm</option>';
    
    inventory.forEach(product => {
        const option = document.createElement('option');
        option.value = product.code;
        option.textContent = `${product.code} - ${product.name}`;
        option.dataset.name = product.name;
        select.appendChild(option);
    });
}

function handleCreateBatch(e) {
    e.preventDefault();
    
    const productCode = document.getElementById('batch-product').value;
    const product = inventory.find(p => p.code === productCode);
    
    const batchData = {
        id: document.getElementById('batch-code').value,
        productCode: productCode,
        productName: product ? product.name : '',
        quantity: parseInt(document.getElementById('batch-quantity').value),
        used: 0,
        remaining: parseInt(document.getElementById('batch-quantity').value),
        importDate: document.getElementById('batch-import-date').value,
        supplier: document.getElementById('batch-supplier').value,
        status: 'active'
    };
    
    batches.push(batchData);
    currentBatchId++;
    
    saveBatchesToStorage();
    saveCurrentBatchIdToStorage();
    
    showToast('Đã tạo lô hàng thành công!', 'success');
    hideBatchForm();
    updateBatchesDisplay();
    updateInventoryFromBatches();
}

function updateBatchesDisplay() {
    const tbody = document.getElementById('batches-tbody');
    tbody.innerHTML = '';
    
    batches.forEach(batch => {
        const row = createBatchRow(batch);
        tbody.appendChild(row);
    });
}

function createBatchRow(batch) {
    const row = document.createElement('tr');
    
    const status = getBatchStatus(batch);
    const statusClass = getBatchStatusClass(status);
    
    // Calculate totals
    const totalQuantity = batch.products.reduce((sum, product) => sum + product.quantity, 0);
    const totalUsed = batch.products.reduce((sum, product) => sum + product.used, 0);
    const totalRemaining = batch.products.reduce((sum, product) => sum + product.remaining, 0);
    const productTypes = batch.products.length;
    
    row.innerHTML = `
        <td><strong>${batch.id}</strong></td>
        <td>${formatDate(batch.importDate)}</td>
        <td>${batch.supplier || ''}</td>
        <td><strong>${productTypes}</strong></td>
        <td><strong>${totalQuantity}</strong></td>
        <td>${totalUsed}</td>
        <td><strong>${totalRemaining}</strong></td>
        <td><span class="status-badge ${statusClass}">${status}</span></td>
        <td>
            <button class="btn btn-info btn-small" onclick="showBatchDetails('${batch.id}')" style="margin-right: 5px;">
                <i class="fas fa-eye"></i> Chi Tiết
            </button>
            <button class="btn btn-warning btn-small" onclick="editBatch('${batch.id}')">
                <i class="fas fa-edit"></i> Sửa
            </button>
        </td>
    `;
    
    return row;
}

function getBatchStatus(batch) {
    const hasRemaining = batch.products.some(p => p.remaining > 0);
    if (!hasRemaining) return 'Hết hàng';
    return 'Còn hàng';
}

function getBatchStatusClass(status) {
    if (status === 'Hết hàng') return 'status-out-of-stock';
    if (status === 'Hết hạn') return 'status-cancelled';
    return 'status-in-stock';
}

function updateInventoryFromBatches() {
    // Update inventory stock based on batches
    inventory.forEach(product => {
        let totalStock = 0;
        batches.forEach(batch => {
            const productInBatch = batch.products.find(p => p.productCode === product.code);
            if (productInBatch) {
                totalStock += productInBatch.remaining;
            }
        });
        product.stock = totalStock;
    });
    
    saveInventoryToStorage();
    updateInventoryDisplay();
}

// Reports functions
function updateReportsDisplay() {
    updateInventorySummary();
    updateInventoryDetail();
}

function updateInventorySummary() {
    const tbody = document.getElementById('inventory-summary-tbody');
    tbody.innerHTML = '';
    
    inventory.forEach(product => {
        // Find all batches containing this product
        let totalStock = 0;
        let batchCount = 0;
        
        batches.forEach(batch => {
            const productInBatch = batch.products.find(p => p.productCode === product.code);
            if (productInBatch) {
                totalStock += productInBatch.remaining;
                batchCount++;
            }
        });
        
        const stockValue = totalStock * (product.referencePrice || product.sellPrice || 0);
        
        const row = document.createElement('tr');
        const statusClass = getStockStatus(totalStock);
        const statusText = getStockStatusText(totalStock);
        
        row.innerHTML = `
            <td><strong>${product.code}</strong></td>
            <td>${product.name}</td>
            <td>${product.category}</td>
            <td><strong>${totalStock}</strong></td>
            <td>${batchCount}</td>
            <td>${formatCurrency(stockValue)}</td>
            <td><span class="status-badge ${statusClass}">${statusText}</span></td>
        `;
        
        tbody.appendChild(row);
    });
}

function updateInventoryDetail() {
    const tbody = document.getElementById('inventory-detail-tbody');
    tbody.innerHTML = '';
    
    batches.forEach(batch => {
        batch.products.forEach((product, index) => {
            const row = document.createElement('tr');
            const status = getBatchStatus(batch);
            const statusClass = getBatchStatusClass(status);
            
            // Show batch info only for first product in batch
            const batchInfo = index === 0 ? `
                <td rowspan="${batch.products.length}"><strong>${batch.id}</strong></td>
                <td rowspan="${batch.products.length}">${formatDate(batch.importDate)}</td>
                <td rowspan="${batch.products.length}">${batch.supplier || 'N/A'}</td>
                <td rowspan="${batch.products.length}"><span class="status-badge ${statusClass}">${status}</span></td>
            ` : '';
            
            row.innerHTML = `
                ${batchInfo}
                <td>${product.productCode}</td>
                <td>${product.productName}</td>
                <td>${product.quantity}</td>
                <td>${product.used}</td>
                <td><strong>${product.remaining}</strong></td>
            `;
            
            tbody.appendChild(row);
        });
    });
}

// Export functions
function exportInventoryData() {
    const data = inventory.map(product => ({
        'Mã SP': product.code,
        'Tên Sản Phẩm': product.name,
        'Danh Mục': product.category,
        'Kích Thước': product.size || '',
        'Màu Sắc': product.color || '',
        'Đơn Vị': product.unit,
        'Giá Nhập': product.importPrice,
        'Giá Tham Chiếu': product.referencePrice || product.sellPrice,
        'Tồn Kho': product.stock,
        'Nhà Cung Cấp': product.supplier || ''
    }));
    
    downloadCSV(data, 'danh-sach-kho-hang.csv');
    showToast('Đã xuất dữ liệu kho hàng!', 'success');
}

function exportOrdersData() {
    const data = [];
    
    orders.forEach(order => {
        order.items.forEach(item => {
            data.push({
                'Mã Đơn': order.id,
                'Khách Hàng': order.customerName,
                'Ngày Tạo': formatDate(order.date),
                'Mã SP': item.productCode,
                'Tên Sản Phẩm': item.productName,
                'Số Lượng': item.quantity,
                'Đơn Giá': item.price,
                'Thành Tiền': item.total,
                'Tổng Đơn Hàng': order.total,
                'Trạng Thái': getOrderStatusText(order.status)
            });
        });
    });
    
    downloadCSV(data, 'danh-sach-don-hang.csv');
    showToast('Đã xuất dữ liệu đơn hàng!', 'success');
}

function exportBatchesData() {
    const data = [];
    
    batches.forEach(batch => {
        batch.products.forEach(product => {
            data.push({
                'Mã Lô': batch.id,
                'Ngày Nhập': formatDate(batch.importDate),
                'Nhà Cung Cấp': batch.supplier || '',
                'Trạng Thái': getBatchStatus(batch),
                'Mã SP': product.productCode,
                'Tên Sản Phẩm': product.productName,
                'Số Lượng Ban Đầu': product.quantity,
                'Đã Sử Dụng': product.used,
                'Còn Lại': product.remaining
            });
        });
    });
    
    downloadCSV(data, 'danh-sach-lo-hang.csv');
    showToast('Đã xuất dữ liệu lô hàng!', 'success');
}

function exportSummaryData() {
    const summaryData = inventory.map(product => {
        // Find all batches containing this product
        let totalStock = 0;
        let batchCount = 0;
        
        batches.forEach(batch => {
            const productInBatch = batch.products.find(p => p.productCode === product.code);
            if (productInBatch) {
                totalStock += productInBatch.remaining;
                batchCount++;
            }
        });
        
        const stockValue = totalStock * (product.referencePrice || product.sellPrice || 0);
        
        return {
            'Mã SP': product.code,
            'Tên Sản Phẩm': product.name,
            'Danh Mục': product.category,
            'Tổng Tồn Kho': totalStock,
            'Số Lô': batchCount,
            'Giá Trị Tồn Kho': stockValue,
            'Trạng Thái': getStockStatusText(totalStock)
        };
    });
    
    downloadCSV(summaryData, 'bao-cao-ton-kho.csv');
    showToast('Đã xuất báo cáo tồn kho!', 'success');
}

function downloadCSV(data, filename) {
    if (data.length === 0) {
        showToast('Không có dữ liệu để xuất!', 'warning');
        return;
    }
    
    const headers = Object.keys(data[0]);
    const csvContent = [
        headers.join(','),
        ...data.map(row => headers.map(header => `"${row[header] || ''}"`).join(','))
    ].join('\n');
    
    const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Updated handleExportOrder function to support two types of receipts
function handleExportOrder(includePrice = true) {
    const modal = document.getElementById('order-detail-modal');
    const orderId = modal.dataset.orderId;
    const order = orders.find(o => o.id === orderId);
    
    if (!order) {
        showToast('Không tìm thấy đơn hàng!', 'error');
        return;
    }
    
    // Allow exporting for any status except cancelled
    if (order.status === 'cancelled') {
        showToast('Không thể xuất phiếu cho đơn hàng đã hủy!', 'warning');
        return;
    }
    
    // Only check stock and update batches if order is not already exported
    if (order.status !== 'exported' && order.status !== 'completed') {
        let canExport = true;
        const batchUpdates = [];
        
        order.items.forEach(item => {
            // Find batches containing this product
            const availableBatches = batches.filter(batch => 
                batch.products.some(p => p.productCode === item.productCode && p.remaining > 0)
            ).sort((a, b) => new Date(a.importDate) - new Date(b.importDate)); // FIFO
            
            let remainingQuantity = item.quantity;
            const itemBatchUpdates = [];
            
            for (const batch of availableBatches) {
                if (remainingQuantity <= 0) break;
                
                const productInBatch = batch.products.find(p => p.productCode === item.productCode);
                if (productInBatch && productInBatch.remaining > 0) {
                    const useFromBatch = Math.min(remainingQuantity, productInBatch.remaining);
                    itemBatchUpdates.push({
                        batch: batch,
                        productInBatch: productInBatch,
                        quantity: useFromBatch
                    });
                    remainingQuantity -= useFromBatch;
                }
            }
            
            if (remainingQuantity > 0) {
                canExport = false;
                showToast(`Không đủ hàng trong lô cho sản phẩm ${item.productCode}!`, 'error');
            } else {
                batchUpdates.push(...itemBatchUpdates);
            }
        });
        
        if (canExport) {
            // Apply batch updates
            batchUpdates.forEach(update => {
                update.productInBatch.used += update.quantity;
                update.productInBatch.remaining -= update.quantity;
            });
            
            // Update order status to exported
            order.status = 'exported';
            
            // Save changes
            saveBatchesToStorage();
            saveOrdersToStorage();
            updateInventoryFromBatches();
            
            // Update displays
            updateOrdersDisplay();
            updateBatchesDisplay();
            updateReportsDisplay();
        } else {
            return; // Don't proceed if stock check failed
        }
    }
    
    // Generate and print receipt (for any status except cancelled)
    generateReceipt(order, includePrice);
    
    const receiptType = includePrice ? 'đầy đủ' : 'không có giá';
    showToast(`Đã xuất phiếu ${receiptType} thành công!`, 'success');
    hideModal();
}

// Updated generateReceipt function
function generateReceipt(order, includePrice = true) {
    const receiptWindow = window.open('', '_blank');
    const date = new Date(order.date).toLocaleDateString('vi-VN');
    const receiptType = includePrice ? 'ĐẦY ĐỦ' : 'KHÔNG GIÁ';
    
    const priceColumns = includePrice ? `
        <th>Đơn Giá</th>
        <th>Thành Tiền</th>
    ` : '';
    
    const priceRows = includePrice ? 
        order.items.map(item => `<td>${formatCurrency(item.price)}</td><td>${formatCurrency(item.total)}</td>`).join('') :
        order.items.map(() => '<td></td><td></td>').join('');
    
    const totalSection = includePrice ? `
        <div class="total">
            <strong>TỔNG TIỀN: ${formatCurrency(order.total)}</strong>
        </div>
    ` : '';
    
    const receiptHTML = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Phiếu Đơn Hàng ${receiptType} - ${order.id}</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 20px; }
                .header { text-align: center; margin-bottom: 30px; }
                .company-name { font-size: 24px; font-weight: bold; color: #2c3e50; }
                .receipt-title { font-size: 20px; margin: 10px 0; }
                .receipt-type { font-size: 16px; color: #e74c3c; font-weight: bold; }
                .order-info { margin: 20px 0; }
                .order-info div { margin: 5px 0; }
                table { width: 100%; border-collapse: collapse; margin: 20px 0; }
                th, td { border: 1px solid #ddd; padding: 10px; text-align: left; }
                th { background-color: #f2f2f2; }
                .total { text-align: right; font-size: 18px; font-weight: bold; margin: 20px 0; }
                .footer { margin-top: 40px; text-align: center; }
                @media print {
                    body { margin: 0; }
                }
            </style>
        </head>
        <body>
            <div class="header">
                <div class="company-name">HỆ THỐNG QUẢN LÝ KHO GẠCH</div>
                <div class="receipt-title">PHIẾU ĐƠN HÀNG</div>
                <div class="receipt-type">PHIẾU ${receiptType}</div>
                <div>Mã đơn: ${order.id}</div>
            </div>
            
            <div class="order-info">
                <div><strong>Ngày tạo:</strong> ${date}</div>
                <div><strong>Khách hàng:</strong> ${order.customerName}</div>
                <div><strong>Số điện thoại:</strong> ${order.customerPhone}</div>
                <div><strong>Địa chỉ:</strong> ${order.customerAddress}</div>
            </div>
            
            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Mã SP</th>
                        <th>Tên Sản Phẩm</th>
                        <th>Số Lượng</th>
                        ${priceColumns}
                    </tr>
                </thead>
                <tbody>
                    ${order.items.map((item, index) => `
                        <tr>
                            <td>${index + 1}</td>
                            <td>${item.productCode}</td>
                            <td>${item.productName}</td>
                            <td>${item.quantity}</td>
                            ${includePrice ? `<td>${formatCurrency(item.price)}</td><td>${formatCurrency(item.total)}</td>` : '<td></td><td></td>'}
                        </tr>
                    `).join('')}
                </tbody>
            </table>
            
            ${totalSection}
            
            <div class="footer">
                <p>Cảm ơn quý khách đã sử dụng dịch vụ!</p>
                <p>Ngày in: ${new Date().toLocaleDateString('vi-VN')}</p>
            </div>
        </body>
        </html>
    `;
    
    receiptWindow.document.write(receiptHTML);
    receiptWindow.document.close();
    receiptWindow.print();
}

// Utility functions
function formatDate(dateString) {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('vi-VN');
}

function editBatch(batchId) {
    const batch = batches.find(b => b.id === batchId);
    if (!batch) return;
    
    // Fill form with batch data
    document.getElementById('edit-batch-title').textContent = batch.id;
    document.getElementById('edit-batch-id').value = batch.id;
    document.getElementById('edit-batch-import-date').value = batch.importDate;
    document.getElementById('edit-batch-supplier').value = batch.supplier || '';
    document.getElementById('edit-batch-status').value = batch.status;
    
    // Display products in batch
    const tbody = document.getElementById('edit-batch-products-tbody');
    tbody.innerHTML = '';
    
    batch.products.forEach((product, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><strong>${product.productCode}</strong></td>
            <td>${product.productName}</td>
            <td>
                <input type="number" id="edit-quantity-${index}" value="${product.quantity}" min="0" 
                       onchange="updateRemaining(${index}, '${product.used}')">
            </td>
            <td>
                <input type="number" id="edit-used-${index}" value="${product.used}" min="0" 
                       onchange="updateRemaining(${index}, '${product.quantity}')">
            </td>
            <td><strong id="remaining-${index}">${product.remaining}</strong></td>
            <td>
                <button class="btn btn-danger btn-small" onclick="removeProductFromBatch('${batchId}', ${index})">
                    <i class="fas fa-trash"></i> Xóa
                </button>
            </td>
        `;
        tbody.appendChild(row);
    });
    
    // Store current batch ID for saving
    document.getElementById('edit-batch-modal').dataset.batchId = batchId;
    
    document.getElementById('edit-batch-modal').style.display = 'block';
}

// Product batch details functions
function showProductBatchDetails(productCode) {
    const product = inventory.find(p => p.code === productCode);
    if (!product) return;
    
    document.getElementById('product-batch-title').textContent = `${product.code} - ${product.name}`;
    
    // Find all batches containing this product
    const productBatches = [];
    batches.forEach(batch => {
        const productInBatch = batch.products.find(p => p.productCode === productCode);
        if (productInBatch) {
            productBatches.push({
                batch: batch,
                product: productInBatch
            });
        }
    });
    
    // Display in table
    const tbody = document.getElementById('product-batch-tbody');
    tbody.innerHTML = '';
    
    if (productBatches.length === 0) {
        tbody.innerHTML = '<tr><td colspan="8" class="text-center">Không có lô hàng nào chứa sản phẩm này</td></tr>';
    } else {
        productBatches.forEach(({ batch, product }) => {
            const row = document.createElement('tr');
            const status = getBatchStatus(batch);
            const statusClass = getBatchStatusClass(status);
            
            row.innerHTML = `
                <td><strong>${batch.id}</strong></td>
                <td>${formatDate(batch.importDate)}</td>
                <td>${batch.expiryDate ? formatDate(batch.expiryDate) : 'N/A'}</td>
                <td>${batch.supplier || 'N/A'}</td>
                <td>${product.quantity}</td>
                <td>${product.used}</td>
                <td><strong>${product.remaining}</strong></td>
                <td><span class="status-badge ${statusClass}">${status}</span></td>
            `;
            
            tbody.appendChild(row);
        });
    }
    
    document.getElementById('product-batch-modal').style.display = 'block';
}

function hideProductBatchModal() {
    document.getElementById('product-batch-modal').style.display = 'none';
}

// Batch detail functions
function showBatchDetails(batchId) {
    const batch = batches.find(b => b.id === batchId);
    if (!batch) return;
    
    document.getElementById('batch-detail-title').textContent = batch.id;
    document.getElementById('batch-detail-id').textContent = batch.id;
    document.getElementById('batch-detail-import-date').textContent = formatDate(batch.importDate);
    document.getElementById('batch-detail-supplier').textContent = batch.supplier || 'N/A';
    
    const status = getBatchStatus(batch);
    const statusClass = getBatchStatusClass(status);
    document.getElementById('batch-detail-status').innerHTML = `<span class="status-badge ${statusClass}">${status}</span>`;
    
    // Display products in batch
    const tbody = document.getElementById('batch-detail-tbody');
    tbody.innerHTML = '';
    
    batch.products.forEach(product => {
        const productInfo = inventory.find(p => p.code === product.productCode);
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td><strong>${product.productCode}</strong></td>
            <td>${product.productName}</td>
            <td>${productInfo ? productInfo.category : 'N/A'}</td>
            <td>${productInfo ? (productInfo.size || 'N/A') : 'N/A'}</td>
            <td>${productInfo ? (productInfo.color || 'N/A') : 'N/A'}</td>
            <td>${productInfo ? productInfo.unit : 'N/A'}</td>
            <td>${productInfo ? formatCurrency(productInfo.importPrice) : 'N/A'}</td>
            <td>${productInfo ? formatCurrency(productInfo.referencePrice || productInfo.sellPrice) : 'N/A'}</td>
            <td>${product.quantity}</td>
            <td>${product.used}</td>
            <td><strong>${product.remaining}</strong></td>
        `;
        
        tbody.appendChild(row);
    });
    
    document.getElementById('batch-detail-modal').style.display = 'block';
}

function hideBatchDetailModal() {
    document.getElementById('batch-detail-modal').style.display = 'none';
}

// Edit batch functions
function hideEditBatchModal() {
    document.getElementById('edit-batch-modal').style.display = 'none';
}

function updateRemaining(index, otherValue) {
    const quantity = parseInt(document.getElementById(`edit-quantity-${index}`).value) || 0;
    const used = parseInt(document.getElementById(`edit-used-${index}`).value) || 0;
    const remaining = Math.max(0, quantity - used);
    document.getElementById(`remaining-${index}`).textContent = remaining;
}

function removeProductFromBatch(batchId, productIndex) {
    if (confirm('Bạn có chắc chắn muốn xóa sản phẩm này khỏi lô hàng?')) {
        const batch = batches.find(b => b.id === batchId);
        if (batch && batch.products[productIndex]) {
            batch.products.splice(productIndex, 1);
            
            // If no products left, remove the batch
            if (batch.products.length === 0) {
                const batchIndex = batches.findIndex(b => b.id === batchId);
                batches.splice(batchIndex, 1);
                saveBatchesToStorage();
                updateBatchesDisplay();
                updateInventoryFromBatches();
                hideEditBatchModal();
                showToast('Đã xóa lô hàng vì không còn sản phẩm nào!', 'warning');
            } else {
                // Update the edit modal
                editBatch(batchId);
                showToast('Đã xóa sản phẩm khỏi lô hàng!', 'success');
            }
        }
    }
}

function saveBatchChanges() {
    const batchId = document.getElementById('edit-batch-modal').dataset.batchId;
    const batch = batches.find(b => b.id === batchId);
    if (!batch) return;
    
    // Update batch info
    batch.importDate = document.getElementById('edit-batch-import-date').value;
    batch.supplier = document.getElementById('edit-batch-supplier').value;
    batch.status = document.getElementById('edit-batch-status').value;
    
    // Update products
    const tbody = document.getElementById('edit-batch-products-tbody');
    const rows = tbody.querySelectorAll('tr');
    
    rows.forEach((row, index) => {
        if (batch.products[index]) {
            const quantity = parseInt(document.getElementById(`edit-quantity-${index}`).value) || 0;
            const used = parseInt(document.getElementById(`edit-used-${index}`).value) || 0;
            const remaining = Math.max(0, quantity - used);
            
            batch.products[index].quantity = quantity;
            batch.products[index].used = used;
            batch.products[index].remaining = remaining;
        }
    });
    
    // Save changes
    saveBatchesToStorage();
    updateInventoryFromBatches();
    updateBatchesDisplay();
    updateReportsDisplay();
    
    showToast('Đã cập nhật lô hàng thành công!', 'success');
    hideEditBatchModal();
}
